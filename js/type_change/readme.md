- js  类型知识点
    1. 7个基础数据类型  +  1个对象
    2. typeof  null  object  [object array]
        instanceof  Object -> null
    3. 基于对象的面向对象  new
        Constructor  +  prototype
    4. prototype  继承 
    5. 类型转换  隐式  +  显式
    6. 0.1 + 0.2 != 0.3

- js  弱类型语言，类型的转换系统
    字符串
    布尔值
    字符型
    + ! * / ===  隐式类型转换
- 由于js神奇的类型转换，建议在代码中不要用 == 
    js推荐禁用 == 使用 ===


    [] + {} -> object
    {} + [] -> 0

- 显式类型转换
    String()
    Number()
    Boolean()

- '+' 拼接 数值相加 
    x + y
    + 左右两侧  任何一个是字符串， 拼接  不是字符串的隐式转换为字符串
      如果左右任何一个是对象，这个对象变成字符串， 拼接  另一个隐式转换成字符串
      其他情况都为数值相加
   ## + 只要有一个是字符串或者对象就都是拼接 ##

- String()  强制类型的规则
    简单数据类型，和理解的一样  ''
    复杂数据类型  强制转成字符串的时候？ 可能各不一样
    - 对象字面量  [object  Object]
    - 数组  []  ''  [1,2,3]  '1,2,3'
        会调用原型链上的toString方法作为结果返回

- Number() 强制类型转换的时候
    基础数据类型里面  
        Number(undefined)  NaN
        Symbol()   throw  error
        同时 NaN typeof  number
    复杂数据类型 -> Number  toPrimitive  复杂数据类型转换成基础数据类型的过程
        1. 会先转换成基础类型
            valueOf方法如果返回基本类型的值
            否则toString()
        2. 再转换成number类型

- toPrimitive
    1. 如果有valueOf 方法， 且是基础数据类型
        对对象toPrimitive时，使用[1,2] valueOf方法 本身
    2. 否则用toString()方法

- [] + {} == {} + [] // true
  [] + {} // '[object Object]'
  {} + [] // 0   =>  {}; + [] 浏览器会补全分号 并且把{}解释成代码块

  == 抽象相等 转换原则 类型转换
  === 绝对(全相等) 正确

  坑：NaN == NaN  // false


  ## == 只有类型不一致才会进行隐式转换 ##
  1. 对于数字和字符串的抽象比较，将字符串进行ToNumber操作后再进行比较
  2. 对于布尔值和其他类型的比较，将其布尔类型进行ToNumber操作后再进行比较
  3. 对于对象和基础类型的比较，将对象进行ToPrimitive操作后在进行比较
  4. 对象之间的比较，引用同一个对象则为true，否则为false







