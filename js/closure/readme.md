# 闭包
   - 无障碍访问
   - html 5 的input 新属性
        es6  const  let  arrow  function  Promise
            ...
        html5  <!DOCTYPE html>  类型声明
            input: readonly  placeholder  type  number  required
            localstorage.getItem()  setItem
            ...
    - JS 对象 -> html标签
      html 标签 也可以对应 js对象
      html DOM树 (数据结构) -> js DOM 对象转化过程
      Object.prototype.toString.call() 获得对象子类型
      MDN  子类型  查询  看文档办事

    - Ajax 的流程
        1. 实例化一个XMLHttpRequest对象
            http://127.0.0.1:5555/lesson_my/js/closure/1.html  请求的是html css js   为了界面
            拥有js 主动发出http请求的能力  为了数据 (n次)

        2. xhr.readyState 0 状态  UNSENT
        3. 打开http链接  定义Method  URL  open()
        4. xhr.readyState  1  OPENED
        5. send() 发送请求
        6. xhr.readyState  
        7. onreadystatechange   数据到达监听事件 2 HEADERS_RECEIVED 服务器端
        8. xhr.readyState 3 Loading 数据到达过程中
        9. xhr.readyState 4 DONE 拿到完整数据
        10. xhr.responseText 数据


    - search suggest 用户体验优化的功能
        1. 用户完整搜索  
            降低用户的使用门槛(把用户当小白), 
        
    - 异步问题
        1. 事件 keyup
            处理函数内部拿到返回数据时
            不可以通过return拿
        2. ajax 是异步的，js主线程会把它放入event loop
            所以 res undefined  , 主线程直接不等了
        3. 提出的方案是使用回调函数

- Promise
    1. 解决异步问题而来
        promise{pending} 问题还没有开始解决 放入 event loop
        loop
    2. new Promise((resolve,reject) => {
        resolve(res) 可以传参数 res
        p fullfilled
    })

    3. p.then(res => {

    })
        p  resolve 后运行 res 是调用resolve后的结果
           reject 是失败后调用 走catch路线