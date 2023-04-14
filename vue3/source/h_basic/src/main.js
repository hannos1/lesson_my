import {Fragment, h} from './h'
import {Component} from './Component'
import render from './render'

// const elementVNode = h('div',null,h('span'))
// console.log(elementVNode)

// const elementWithTextVNode = h('div',null,'我是文本')
// console.log(elementWithTextVNode)

// const fragmentVNode = h(Fragment,null,[h('h1'),h('h1')])
// console.log(fragmentVNode)

// // 函数组件
// function MyFunctionalComponent(){

// }
// // MyFunctionalComponent.prototype.render = function(){

// // }
// const functionalComponentVNode = h(MyFunctionalComponent,null,h('div'))
// console.log(functionalComponentVNode)


// class MyStatefulComponent extends Component{
//     // constructor(){
//     //     try
//     // }
// }

// const statefulComponentVNode = h(MyStatefulComponent,null,h('div'))
// console.log(statefulComponentVNode)
// console.log(JSON.stringify(statefulComponentVNode))  // JSON.stringfy() 不会把key为类或者函数的键值对解析到 -> 深拷贝浅拷贝的最简单写法


// const elementVNode = h(
//     'div',
//     {
//         style:{
//             height:'100px',
//             width:'100px',
//             background:'red'
//         }
//     },
//     h('div',
//     {
//         style:{
//             height:'50px',
//             width:'50px',
//             background:'green'
//         }
//     })
// )
// // console.log(elementVNode)
// render(elementVNode,document.getElementById('app'))


// const dynamicClass = ['cliss-b','class-c']

// const elementVNode = h('div',{class:['class-a',dynamicClass]})
// render(elementVNode,document.getElementById('app'))


const elementVNode = h('input',{
    class:'cls-a',
    type:'checkbox',
    checked:true,
    custom:'1'
})
render(elementVNode,document.getElementById('app'))
