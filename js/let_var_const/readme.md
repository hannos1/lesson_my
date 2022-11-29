- 请介绍下 var let const
    1. es6以前 用var声明变量 那时候没有变量
        let const 是 es6(2015) 的变量和常量
    2. var let 变量声明
        const 常量如果是复杂数据类型 值还是能变
    3. let 支持块级作用域
    4. var 申明的变量会挂载在window全局对象上,会污染
        let 不会
    5. var 申明的变量会提升到所在作用域最上面 (声明得提升 ， undefined) 不会报错
      影响代码可读性
      let 不会提升
      function 声明的函数 会提升 值也会提升
      const func = function(){}