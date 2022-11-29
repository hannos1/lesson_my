- 搞清楚js 实例的生成过程
    1. 大写Person做构造函数
        因为js是基于对象的面向对象
        模板
        var Person = {
            name:'...',
            age:'...'
        }
        var aTao = {};//Object __proto__
        aTao基于Person
        aTao.name = '阿涛'
        aTao.age = 17
        可以快速构造对象
    - 封装 用函数
        function Person(){ // constructor 所有对象默认有 .__proto__ 属性
            this.
        }
        //不是简单的类和实例关系 是上面那个aTao和Person的关系
        let aTao = new Person()
        let aTao = Person()

    // js没有类 只有对象
     - es6 以前没有class关键字
     - 一切皆对象 基于对象 任何对象都有原型 默认是object.prototype
     - js 函数可以封装类， 完全可以实现基于对象的构建

    3. js 为了实现基于对象式的构建
        - 用函数作为类的声明(首字母大写) 特别
            封装了实例的构建过程
            this(new) 指向实例,函数运行 完成给实例添加添加基于对象的属性
        - 实例的方法不要放到构造函数里声明 因为给每个实例都分配一个函数内存不好


    - 比如 let aTao = new Person();
    就是aTao.Person(name,age)然后aTao.__proto__=Person.prototype;

# new的本质 (定义属性，将__proto__指向new的对象的prototype)
    - let aTao = Person('atao',17):

    Function Person(name,age){
        var o = {}
        o.name = name;
        o.age = age;
        o.__proto__ = Person.prototype
        return o;
    }
    Person.prototype = {
        sayHi(){
            console.log('hi')
        }
    }//在person的prototype里定义sayHi方法可以防止所有的实例都重新弄一个sayHi，否则会浪费空间，这和java那种类似

    而 let aTao = new Person('atao',17)
    Function Person(name,age){
        this.name = name;
        this.age = age;
    }
    Person.prototype = {
        sayHi(){
            console.log('hi')
        }
    }
    相当于没有new的情况，把两个属性name和age给aTao然后把aTao的__proto__指向Person的prototype(自动，而没new要手动)

-  js面向对象由以下概念组成 
    1. 构造函数有prototype属性,值是一个对象，prototype归所有实例共享
    2. 实例拥有一个__proto__私有属性 对象在查找完自身的属性和方法后，去__proto__指向的原型对象(prototype)去查找
    如果有就返回 没有继续找
    3. cai 实例
    Person构造函数
    Person.prototype原型对象
    Person.prototype.__proto__原型对象 object js内置的基于对象cai.toString原型链上的方法，对象查找会沿着原型链一直找
    Object 是对象，也是构造函数


    所有对象都有__proto__属性，它也是一个原型对象
