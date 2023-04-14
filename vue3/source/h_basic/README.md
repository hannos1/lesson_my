# snabbdom + vue 需求

- component -> template -> compiler -> h(三个参数, babel抽象语法树构建) -> VNode + Renderer -> DOM

let a = 1;
let b = 2;
let c = a + b;
词法分析 token 以树状结构组织  AST抽象语法树

- h() 函数  
    - 返回的 VNode 设计
    - 参数 三个
        tag  data  children

- vue源码学到了啥？
    - 处处性能优化
        - VNodeFlags ChildrenFlags
            位运算 << & | 计算更快
            在render阶段 走dom api 或者component render 
        - element VNode 真实DOM
    - 模块化
        - flags 
        - reactivity 
        - compiler
        - renderer
    - jest测试驱动开发
        实现一个小目标推进大目标
    - 面向对象设计
        - Component 组件设计
            - 继承
                render 必须有 vue2.0写法
