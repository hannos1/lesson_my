# css 必考题 BFC
    我们看到的页面 哪些规则决定的
    Block Formating Context
        Block 占据一行
    弹性布局叫 Flex Formating Context
        row 不会换行
    - 文档流
        正常文档流 
        脱离文档流
            none  
            position 不为static
            float 元素离开文档流
            父元素拿不到子元素的高度
            <!-- 父元素 定死高度 -->
            弹性布局 子元素在一行上显示 float在一行

- 在正常文档流中
    Float会让元素离开文档流 父元素就不能知晓离开了文档流的子元素的大小  更严重的问题是:文档流出问题,下面的盒子会盖上去
    一定要让父元素拿到高度
    在正常文档流可以开启新BFC css魔法就上演了
    html是最大的BFC，由浏览器自动创建给予 
    - 在BFC环境中，父元素高度会将浮动元素参与计算
    - 创建BFC方法
        - overflow:hidden
        - display:inline-block
        - position:absolote fixed 
        - 浮动
        - flex
        - display:table

    - 在同一BFC里，垂直方向的距离，由margin决定
        相邻margin会重叠