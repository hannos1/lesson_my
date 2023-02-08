# html5 拖拽效果

- github提供了 拖拽提交代码
    drag 文件
    drag over 元素或区域的上空
    drag end 放开  


- 资源加载的顺序
    1. css 放置在头部， js 放置在尾部
        DOM 树 + css OM 树 下载并执行 生成渲染树， 快速显示页面
    2. js 执行会修改DOM document.write
        下载和执行 阻塞
    3. script可以放在 head  属性 defer/async

    - 浏览器(多线程)  不是js  js只是浏览器的一部分
        js是单线程的  
        defer 后台加载js  启动了多线程 不会阻塞文档下载
        async 

    - js 要尽快执行 
        DOMContentLoaded 比 onload 更合适  img  video  资源下载  onload

        async 和 defer 都不会影响页面渲染 但是defer会很好的解决执行顺序问题，依赖问题
        async 如果不依赖，文件交互更快实现


- 盒子模型计算公式
    box-sizing  更改计算方式  标准盒子模型 IE盒子模型
    box-sizing:border-box; 切换到IE盒子模型的方式  w = 内容 + padding + border

    现代浏览器 默认启用标准盒模型 chrome
    360 如果本地安装了chrome webkit，IE老版本， ie盒模型

    IE盒子模型 移动端动态分配内容， padding border的列布局中
    相当简单

    没有小数点px  


    标准盒模型的盒子大小计算方式 = 内容(设置width，height) + padding + border, 即width和height只设置内容的宽高
    IE盒模型(width,height) = 内容(width-padding-border) + border + padding, 即width和height直接设置除了margin以外的宽高之和

- drag效果
    1. 拖拽的元素， 添加一个draggable='true'
        dragStart dragEnd 添加一些被拖拽效果
    2. 容器元素 