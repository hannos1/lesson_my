# 手写vuex

- Store 类
    单例  store
    state() mutations
    constructor options
    commit 方法
    install
- useStore
    app.use()
    provide store
    inject

- 模块化知识点
    1. require + module.exports common.js

    2. import + export es6 module
        一个模块一个功能
        export default  默认输出的只能是一次
        export 输出多个的话也可以
    3. 模块化语法的优先级更高
    4. 模块化语法更明确
        如果一次default 多次export
        import a(default),{b,c...} from '...'


- es6 是 js的重大更新
    - 让js成为大型语言，适合企业级开发
        - 模块化 
            代码很多
        - class 
            传统面向对象  get  set 
            原型式的难理解
        - extends 继承
        - let const var 块级作用域+变量
    - 代码更优雅 简洁
        [] {} 简洁 ...
