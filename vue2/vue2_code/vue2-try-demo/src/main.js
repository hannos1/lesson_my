import { template } from 'lodash'


// lodash生成模板
// const compiler = template('<h1><%= title %></h1>')
// const html = compiler({ title: 'My Component' })

// document.getElementById('app').innerHTML = html


// setTimeout(() => {
//     const html1 = compiler({ title: 'My Component1' })
//     document.getElementById('app').innerHTML = html1
// },2000);

// lodash模板的简单封装
// const MyComponent = props => { // 组件单元
//     const compiler = MyComponent.cache || (MyComponent.cache = template('<h1><%= title %></h1>'))
//     const html = compiler(props)
//     return html
// }
// MyComponent.cache = null

// document.getElementById('app').innerHTML = MyComponent({ title: 'MyComponent' })


// import { h } from 'snabbdom'

// // h 函数用来创建 VNode，组件的产出是 VNode
// const MyComponent = props => {
//   return h('div#container',[h('h1','hello anabbdom'),h('p','p标签')])
// }
// console.log(MyComponent({title:'MyComponent'}))



// import { h, init } from 'snabbdom'  // h会返回虚拟dom树(json array)  patch(prevVnode, nextVnode)旧dom树和新dom树对比然后替换掉html中的插值
// // init 方法用来创建 patch 函数
// const patch = init([])

// const MyComponent = props => {
//   return h('h1', props.title)
// }

// // 组件的产出是 VNode
// const prevVnode = MyComponent({ title: 'prev' })
// // 将 VNode 渲染成真实 DOM
// patch(document.getElementById('app'), prevVnode)


// 手写一个类似patch的渲染函数render
// const elementVnode = {
//     tag: 'div'
// }

// const componentVnode = {
//     tag: MyComponent
// } // 这是一个组件

// function render(vnode, container) {
//     if (typeof vnode.tag === 'string') {
//         // html 标签
//         mountElement(vnode, container)
//     } else {
//         // 组件
//         mountComponent(vnode, container)
//     }
// }

// function mountComponent(vnode,container){
//     // 创建组件实例
//     const instance = new vnode.tag() // Component 类  
//     // 渲染 生成虚拟DOM
//     instance.$vnode = instance.render()
//     // 挂载
//     mountElement(instance.$vnode, container)
// }

// function mountElement(vnode, container) {
//     // 创建元素
//     const el = document.createElement(vnode.tag)
//     // 将元素添加到容器
//     container.appendChild(el)
// }

// render(elementVnode, document.getElementById('app'))



// MyComponent 组件
class MyComponent {
render() {
    // render 函数产出 VNode
    return {
    tag: 'div'
    }
}
}

// VNode
const componentVnode = {
tag: MyComponent
}

// 渲染
render(componentVnode, document.getElementById('app'))

function render(vnode, container) {
if (typeof vnode.tag === 'string') {
    // html 标签
    mountElement(vnode, container)
} else {
    // 组件
    mountComponent(vnode, container)
}
}

function mountComponent(vnode, container) {
// 创建组件实例
const instance = new vnode.tag()
// 渲染  
instance.$vnode = instance.render()
// 挂载
mountElement(instance.$vnode, container)
}

function mountElement(vnode, container) {
// 创建元素
const el = document.createElement(vnode.tag)
// 将元素添加到容器
container.appendChild(el)
}