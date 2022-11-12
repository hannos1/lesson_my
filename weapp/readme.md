# 小程序 云开发

## 现代开发方式
    1. 小程序 界面直接手机打开 4S店做一款试驾应用
    2. 选择技术方案
        Andriod  IOS  
        小程序 
    3. 数据库不需要安装 数据在云端
    4. 不需要部署 一键发布到腾讯

## 小程序开发知识点
    1. 开发一个个的page 
        /pages
    2. page结构
        wxml 结构
            动态模板
        wxss 样式
            vw 适配所有手机
            vh
            绝对居中
            page 每个页面隐藏的 标签选择 1
            .container{} 类选择器 10
            page 相对定位 relative 100vw 100vh
            container absolute
                top 50% left 50% 中心点
                transform:translate(-50%, -50%)

        js 逻辑
            Page({//json格式数据
                data:{//可以绑定的数据
                    title:'',
                    car:'',
                }
            })