# 设计模式

- 单例模式
    1. 类可以实例化无数次, 抽象概念, 被new的时候, 实例化一次
        类是实例化的方法和属性的模板
    2. 有的需求, 类只负责封装, 只能实例化一次
        登录弹出框,不管再任何触发鉴权的地方,弹出的都是同一个框
    3. static属于类的静态方法
        唯一的一次实例化过后的对象,存在类的静态属性中,
        下次再来, 检测是否有, 返回
        从而, 值实例化一次

- 页面上有多处触发弹窗的地方
    利用事件冒泡机制的事件代理， 优化必须上
    在最外层监听，事件监听开销只有一次
    event.target 事件发生在那个元素上

- 弹窗的DOM 构建及close事件 放到construtor里面
    弹窗出现就可以推迟到第一次实例化的时候

- 拿到实例后，可以调用它上面的show  hide 方法 
    就是把原来应该写在script上的function都封装到class里面