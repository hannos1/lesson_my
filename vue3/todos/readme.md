- vue前  js以DOM编程为主  
    1. 查找DOM  元素  document.querySelector
    2. 对DOM 元素进行一些操作
    性能差  jQuery优化了DOM api 

- vue
    1. MVVM设计模式
        data(){
            return{

            }
        },
        template:`{{}}`
    2. 组件思维
    3. 数据驱动的思想

- todos  显示  所有和待完成数量   badcode
    {{todos.length}}  {{todos.filter(todo => !todo.done).length}}
    实现了功能，数据驱动
    可读性不好  可维护性排第一位