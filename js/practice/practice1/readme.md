- CSS Rule 
    1. 盒子模型  content + padding+border+margin 快递
    2. 背景颜色调试大法
- 垂直居中
    1. 父子元素 
        父元素  relative(不是必须的)
        子元素  absolute
    2. 要不要确定子元素的大小
        transform  rotate | translate | scale 
        变基 

# flex布局 弹性布局
   - flex元素 容器 flex container
   - 容器大小 (main end - main start) * (cross end - cross start)

   - flex子元素 项目 flex item
   - 项目占据 mian size * cross size 大小

## 容器属性
   - 主轴
      - flex-direction
        row 左上角到右下角，水平排列，row-reverse 是row关于交叉轴对称
        column 从左上角到右下角，竖直排列，column-reverse 是 column关于交叉轴对称

      - flex-wrap
        是否换行 可以防止容器被撑爆
    
      - flex-flow
        flex-direction 与 flex-wrap 的集合，flex-flow: flex-direction, flex-wrap
  
      - justify-content 
        有点像word的文本对齐方式，不过文本变成了项目


   - 交叉轴
      - align-item
        定义项目在交叉轴上如何对齐

      - align-content
        多根轴的对齐方式，比较抽象
        目前知道flex-start与flex-end可以消除项目之间的间隔
    
## 项目属性
   - order
     默认值为0,项目顺序将从小到大依次排列 如0,0,1,..,22
   - flex-grow
     默认值为0,如果项目没有被赋予宽度,则按比例等分
   - flex-shink
     默认值为1,如果块级元素有width,并且父容器空间放不下时,则按比例缩小项目,数值越大,缩小越多
     当值为0时,其他项目按比例缩小,该项目不变  对高度无效,依然会撑大父元素
   - flex-basis
     默认值为auto,项目的主轴大小默认值,如果项目同时设置了flex-basis与width(或者height),则项目主轴大小等于flex-basis
   - align-self
     允许项目设置一个新的对齐方式,默认值为auto(继承父元素值)

    
