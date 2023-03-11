# react 和 vue 的共同点
    1. vue 和 react 都是当下最好的MVVM开发框架
       都是组件化思想和数据驱动
    2. vue3.0 composition api + hooks 函数编程
       两个越来越像
    3. 当时选择vue作为主要学习开发框架，如果写react也可以很快熟悉


- vue2.0和vue3.0有何区别
    1. 面向对象编程和函数编程
        vue3 使用composition api 和 setup 语法糖， 代码风格可以不为了面向对象而面向对象，this基本不用
        composition api 很好用 
    2. hooks编程
    3. 老版本切换回去也很快，主打学习3.0


- 在工程化的思维下,开发vue项目的本质是
    写的代码不一定是运行的代码
    1. .vue 的组件为主
        template  script  style  三明治
    2. 使用相应loader 将代码编译为浏览器可执行的js  css 文件
        - vue-loader 处理 .vue 文件
        - style部分  ->  css-loader style-loader stylus-loader  
        - script + template 
            vue-loader mvvm模板数据结合
        - js  babel-loader
