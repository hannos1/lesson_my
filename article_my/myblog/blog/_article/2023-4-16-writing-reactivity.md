---
title: vue3的响应式原理学习
date: 2023-04-16
author: hannos1
location: China  
tags: 
    - JavaScript
    - Vue3
    - effect
    - reactive
---

## 前言
最近学习了一下大圣老师的vue3源码讲解，感觉收获非常多，于是现在来分享下我最近的学习成果。这里是[原文地址](https://time.geekbang.org/column/article/470089)，感兴趣的话可以从里面找到一个迷你vue框架。<br />

## reactive的原理
**首先请看一张图片**
![vue响应式原理.png](/asset/vue响应式原理.png)
从这张图片中我们可以看到一个`reactive`对象从定义到响应的过程，如果您第一次学习vue源码，您可能会觉得一头雾水。这里我尽量用简单的文字来描述这个过程，这个过程大概是这样的：

- 对象`{num:1,num2:2}`经过reactive()声明后被[`Proxy`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)包裹

- 然后在`effect`函数中，触发上文Proxy的**get**回调函数。get函数体中会调用`track`函数来收集依赖

- 由于计时器每秒修改一次counter.num1，会触发Proxy的**set**回调函数，set函数体中的`trigger`函数会把counter.num1 + counter.num2重新赋值给`dummy`

现在我们知道了要声明一个reactive对象我们需要一个`reactive()`函数和`effect()`函数，我们来看他们具体做什么。

### reactive函数

```js
// reactive.js
import { mutableHandlers } from './baseHandlers'
export const reactiveMap = new WeakMap()  // 缓存map 性能优化 组件卸载 WeakMap会自动删除 弱引用
// vue中的依赖关系是用"对象"来组织的 key为对象此时用map收集更适合
    
export const ReactiveFlags = {
    RAW:"__v_raw",
    IS_REACTIVE:"__V_isReactive" // reactive对象的标签
}

// 深度代理
export function reactive(target){
    return createReactiveObject(target,reactiveMap,mutableHandlers)
}

function createReactiveObject(target,proxyMap,proxyHandlers){ // 2.
    if(typeof target !== 'object'){
        console.warn(`reactive ${target} 必须是一个对象`)
        return target
    }
    
    // 通过proxy创建代理  map里不同的对象存储不同类型的reactive依赖关系
    const existingProxy = proxyMap.get(target)
    if(existingProxy){
        return existingProxy
    }
    
    const proxy = new Proxy(target,proxyHandlers)  
    proxyMap.set(target,proxy)  // 缓存
    
    return proxy
}
```
没错，`reactive()`函数只是将`{num1:1,num2:2}`封装成了响应式对象`Proxy`并且将它返回给`counter`，其他啥也没干。

如果去掉上面代码的优化部分，你会看到：

```js
// reactive.js
import { mutableHandlers } from './baseHandlers'

export function reactive(target){
    return new Proxy(target,mutableHandlers)
}
```
这里的proxy对象依赖`mutableHandlers`来检测数据，以下是baseHandlers.js的内容：

```js
// baseHandlers.js
import { track, trigger } from './effect'
import { reactive } from './reactive'

const get = createGetter()
const set = createSetter()

function createSetter(){
    return function set(target,key,value,receiver){
        const result = Reflect.set(target,key,value,receiver)
        trigger(target,'set',key) // 把依赖函数依次触发，依赖就是dummy和num1的关系
        return result
    }
}

function createGetter(shallow = false){
    return function get(target,key,receiver){
        const res = Reflect.get(target,key,receiver) // 找到target[key]
        track(target,"get",key) // 收集依赖
        if(isObject(res)){
            return shallow ? res : reactive(res) // 这里如果发现属性num1也是对象，就要深度代理 让num1的属性也被proxy监听
        }
        return res // 返回原本的值，这里返回num1的值
    }
}

function isObject(val){
    return typeof val === 'object' && val !== null
}

export const mutableHandlers = {
    get,
    set
} // proxy除了get和set还有其他的钩子，可以到mdn查阅 
```
注意一下createGetter中的细节，如果num1也是对象，那么它也应该被Proxy代理实现深度代理，如果设置了shallow属性就不继续代理了。

这样我们就拥有了一个`Proxy`对象，它在我们**读取**该对象的属性值的时候会触发`get`把需要的值返回，在**修改**该对象的属性值的时候会触发`set`把属性值修改。

一旦**读取**这个对象的属性值，我们假设是num1，我们就利用get把这次触发读取的**依赖关系**(dummy = num1 + num2)记录起来，这就是`track`函数。

而一旦**修改**这个对象的属性值，同样假设是num1，我们就利用set把修改后的值重新交给那个跟num1有关系的变量(上文dummy)，这就是`trigger`函数。

而所有的变量都得到了它们此刻正确的值后，vue框架会重新渲染模板让页面发生改变，这就是响应式的基本原理。

那么track和trigger具体咋实现的呢？接下来请看`effect`函数。

### effect函数

```js
// effect.js
let activeEffect = null
const targetMap = new WeakMap() // targetMap依赖图谱，为了依赖函数的查找，o(1)时间复杂度，单例模式好管理可以全局访问
export function effect(fn,options = {}){// fn就是回调函数 options: lazy schedular
    const effectFn = () => {// 容错 finally用于清除掉activeEffect的缓存
        try{
            activeEffect = effectFn // 缓存，给下面的track提供依赖函数fn 同时effect会先执行fn
            return fn()
        }finally{
            activeEffect = null
        }
    }
    if(!options.lazy){// 暂时不实现lazy
        effectFn() // 触发proxy get
    }
    effectFn.scheduler = options.scheduler
    return effectFn // 返回的函数不会被立即执行 可以返回到外面再用队列管理
}

export function track(target,type,key){
    let depsMap = targetMap.get(target)  // 第一层查找对象  reactive({num1:1,num2:2})
    if(!depsMap){  // 如果依赖图谱里没有就加进去 否则不加
        depsMap = new Map() 
        targetMap.set(target,depsMap)
    }
    let deps = depsMap.get(key) // 同一个num1可能会触发多次get,性能优化
    if(!deps){
        deps = new Set() // effect 去重
    }

    if(!deps.has(activeEffect) && activeEffect){  // 如果effect数组(集合)里没有就加进去
        deps.add(activeEffect)
    }
    depsMap.set(key,deps)
}

export function trigger(target,type,key){
    const depsMap = targetMap.get(target)  // 第一层
    if(!depsMap){ // 如果图谱里没有(可能被垃圾回收了,weekmap)
        return 
    }
    const deps = depsMap.get(key)  // 第二层
    if(!deps){  // 如果图谱里面的是空对象{},没有属性值
        return 
    }
    deps.forEach((effectFn) => {  // 挨个执行
        effectFn()
    });
}
```

可以看到effect函数其实也没干啥活，就是把传入的fn即`() => { dummy = counter.num1 + counter.num2 }`放到一个变量`activeEffect`中缓存了，然后把fn执行了一下。

而在执行fn的时候，由于此时的counter是一个Proxy对象，读值会触发`get`，把缓存了fn的activeEffect交给`track`让它保存到依赖图谱`targetMap`中。

而当我们改变counter的某个属性值时，修改值会触发`set`,此时`trigger`函数被调用，它会通过参数在targetMap中找到被修改的值存着的函数(就是上文中的activeEffect), 并且挨个执行，这样就把一开始的`() => { dummy = counter.num1 + counter.num2 }`执行了一下，执行前num1的值已经发生修改了，这样dummy也会跟着修改。

现在再回去看流程图是不是就更加清晰了？<br />

## ref的原理
了解了reactive的原理，再来看ref是如何实现的。

上文中我们其实已经对响应式的实现已经有了一定的了解，就是把原有对象进行数据代理，然后利用get收集依赖，利用set执行依赖嘛。如果你理解了这些，那么相信此时你一定能写出一个使用Proxy实现的`ref()`。

但是实际上使用Proxy来实现ref有点没必要，因为ref只是把**基本数据类型**处理成响应式对象，而复杂数据类型我们可以完全交给reactive来做。即使你给ref传入一个对象，我们同样把它交给reactive。

那么对基本数据类型进行数据代理就没有必要使用Proxy了，用不上它的深度代理，为了优化性能我们可以用别的方式来进行数据代理。于是就有了：

### ref函数

```js
import {track,trigger} from './effect'
import {reactive} from './reactive'

export function isRef(val){ 
    return !!(val && val.__isRef) 
}

export function ref(val){
    if(isRef(val)){
        return val // val = ref(ref()) 会走这个分支
    }
    return new RefImpl(val) // 简单数据类型的ref
}

// es6 class提供了get set方法
class RefImpl{
    constructor(val){
        this.__isRef = true  // 给响应对象打标签，表示是一个ref对象
        this._val = convert(val) // 返回响应式对象或者基本类型的值
    }
    get value(){
        track(this,'get','value') // 依赖收集
        return this._val
    }
    set value(val){
        if(val !== this._val){  // 如果值没有变化的话不需要响应
            this._val = convert(val)
            trigger(this,'set','value')
        }
    }
}

function convert(val){
    return isObject(val) ? reactive(val) : val
}

function isObject(val){
    return typeof val === 'object' && val !== null
}
```
<br />

## 小结
在vue源码的学习过程中，可以发现响应式的原理似乎并不复杂，对数据进行监听然后在一定时机修改数据并且重新渲染页面就能达到这样的效果。此外其中对代码结构和性能的优化也非常值得学习，比如使用weekMap来缓存和形成依赖图谱，利用变量缓存来减少大量依赖的缓存和数据代理，使用class来优化proxy的使用等等，而据我了解vue对性能的优化并不只如此。如果有兴趣可以了解下**diff算法**和**虚拟DOM**，学习这些相信您会对vue有更加深刻的认识。

本文主要用于分享学习成果和思想，抛砖引玉抛砖引玉，如有错误欢迎指正。    