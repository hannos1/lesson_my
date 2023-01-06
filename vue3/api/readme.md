# 为什么喜欢vue
    - 丰富的指令
        v-if(unmounted)  v-show(display:none)
        v-model 双向绑定
        v-on:click
        v-bind:
        v-html  输出含有html的内容  
        vue 默认会把html作为字符来显示，不会转义成真正的html

- 修饰符
    @click.prevent
    @submit.prevent
    @keydown.enter
- 计算属性 computed
    view 更纯粹  
    帮助我们缓存计算结果  无关数据改变时不会重新计算

- v-model 确实好用
    input里开销很大
   v-model.lazy  

- computed  与 watch 区别
    1. computed 一定要有返回值
    2. watch 只是监听
    3. computed 在 mounted 自动执行一次
    4. watch 只有在数据改变时才会执行

    