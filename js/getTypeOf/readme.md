- js 数据类型

    - 简单类型 7种
    let a = 1; 值的拷贝
    数值 Number
    字符串 String
    布尔值 Boolean
    undefined
    null
    BigInt  BigInt()  123n
    Symbol

    - 复杂数据类型 1种
    let b = {} 地址拷贝

- 引用式赋值考点
    1. 复杂类型在内存中的位置
        栈内存  简单数据类型 + 函数执行栈
        堆内存  复杂数据类型  


- JS es6 提供了两种数据新的类型  Symbol BigInt
    - 使用函数来创建  BigInt(1n)  Symbol('name')
        不是构造函数 不能用new
    - Symbol.for('name') 
    - 作为对象属性，当一个复杂对象中含有多个属性时候，被多个人维护的时候

    - 可以定义类的私有方法 [speak](){}


- JS 申明一个字符串有两种方法
    Number  String  Boolean  是三种简单数据类型(值本身), 同时js也内置了三种类(值和值上操作的集合)
    ""  new String("")
    [1,2,3]  new Array()

    let str = "hello world"
    str.length  隐式组包成 new String()
    str 隐式拆包

    js 语言弱类型  变量可以赋值不同的类型的值
    str.length  先组包  new String()  再拆包

    为了统一的面向对象风格的写法
    


- getTypeof  功能函数
    1. typeof  运算符不靠谱
        typeof null  object
        js 早期bug  null  32位存值  000 最高位是 类型
        000000000000000000000000 null
        object 前三位  000 

        复杂数据类型
        
    