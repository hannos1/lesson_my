- git log太长会进入
  vim 操作
    j 上移
    k 下移
    q 退出
    o 新行
    i 编辑状态

- 变量提升和暂时性死区
    编译阶段 早于运行阶段
    var let(不可以在申明前使用，暂时性死区) 走两条不同的路
    js语言特点，在代码运行前确立作用域
    所有的变量属于作用域管理
    js 变量里有作用域的VO{name}
    变量提升是不好的


- this 终极话术
    this 永远指向最后调用它的那个对象

- this指向 如何指定this
    1. 普通函数  window
    2. 严格模式 undefined
    3. 对象的方法 对象
    4. new 实例
    5. 事件处理函数  事件发生的对象

- 如何指定this
   6. call apply 手动指定this 指向第一个参数
        借用方法  除了指定this 还可以传参
        call  展开来   apply [] 
   7. bind  返回一个被指定了this的函数
        未来被调用时，this指向那个对象


   8. that = this 作用域链 专业的前端才看得懂
   9. 箭头函数  内部没有this 它会沿着作用域链找this