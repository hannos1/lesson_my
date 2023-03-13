# 数据可视化
    
- 认识数据
    如果有十万条数据在页面上展示要怎么办?
    table ul>li
    构建DOM树  css渲染树  显示页面  白屏  内存溢出
    分页  Table  +  Pagination
    滚动到底部加载更多  better-scroll 

- 确定任务 
    增强数据的可读性  图表

- 方案 条形
    x name
    y value 

- 技术方案的选择
    - canvas 2D  绘图方案  绘制API  html5
    - SVG 矢量图   
    - webgl  3D

- 数据整理  
- 绘制API  canvas  

- canvas  是画出来的  像素级别的  
- SVG  数学图形声明出来的， 无限拉伸
    声明式  


- 为什么vue不用dom编程
    太耗性能  
    跟浏览器原理相关  
        页面渲染  html/css
        js 执行 由另外进程管理 
    
- SVG  Canvas 区别
    如果数据简单: SVG更加优秀 缺点是性能不好  频繁操作dom  SVG依托标签来实现功能
    canvas: 绘图api更丰富  GPU负责  性能更好   适合大数据复杂数据展示

    echarts 封装好的库