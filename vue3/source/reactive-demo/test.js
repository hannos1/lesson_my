// vue是模块化开发出来的    reactivity 模块 响应式
// reactivity里的reactive 负责把普通对象包装成响应对象     effect 依赖收集器
const {effect,reactive} = require('@vue/reactivity')

let dummy  // 头节点
const counter = reactive({ num1: 1, num2: 2 })
effect(() => {
  // proxy get
  dummy = counter.num1 + counter.num2
  console.log(dummy)// 每次counter.num1修改都会打印日志
})
setInterval(()=>{
  counter.num1++
},1000)