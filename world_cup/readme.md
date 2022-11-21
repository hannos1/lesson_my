# 营销html5页面特效开发
- 招商银行

1. !DOCTYPE html
    html5 版本声明

2. rotateX(90deg) 推倒 顺时针
    rotateY 龙哥跳钢管舞
    rotateZ 轮胎 
    perspctive:800px; 视点 眼睛离屏幕的距离
    transform-style:perseve-3d

3. html 怎么看到静态页面
    html(结构) + csss(样式) js可以晚一点 (交互 DOM .style)
    - 下载html 文档
    - link script image...
        启动下载 css href  不会阻塞html下载 放到头部
        script src   放在最后 阻塞
        image src

4. chrome 浏览器的内核 webkit
    ie 浏览器 edge
    mozilla 浏览器 moz
    360 如果本地装了chrome webkit  否则 ms
    实验中的属性 可能需要添加 支持
    