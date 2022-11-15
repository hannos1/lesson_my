# 界面构造能力
- 栅格系统
    页面布局的基础
- 先做布局，不要急于做样式  BFC 
    BFC 里块级元素从上到下排列
    从外到内 
    1. 先写html结构
    2. 再来写样式
        取类名
        类名词汇量 简单 贴切
    3. 行列布局 
    4. 样式只是体力活
- 从块级改变布局




- body, div, dl, dt, dd, ul, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, blockquote
  替换 * ,用于减少运算开销
- TIP:nth-child([odd|even|...]) 选择器 用于匹配TIP标签的父元素的指定子元素
- BFC的含义
- .box*5{$} 生成5个div 每个都有class="box" 并且自动填充自增的数字
- ul>li.box*5{$} 生成一个无序列表 每个li都有class="box" 并且填充自增的数字