# 三列式布局

- pc端布局方案
    www.taobao.com -> 301/302 200(HTTP 状态码) -> main.m.taobao.com


- userAgent
    用户代理  包含了浏览器的信息
    www.taobao.com
        iPhone  301  m.taobao.com
    window.navigator  BOM  Browser  Object  

- 三栏式布局  flex(PC 要考虑兼容性), float 
    语义化标签  header + footer + section + aside + article
    main SEO 搜索引擎优化
    中间优化加载并渲染

- 圣杯布局
    1. main 内容自适应且优先
        padding 左右留白
    2. aside margin-left 负值  偏移  -100%  -100px 一左一右
        relative  相对偏移  left  -100px  right  -100px