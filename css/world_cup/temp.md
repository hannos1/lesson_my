* {
    margin: 0;
    padding: 0;
}

html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    /* 背后不可见  浏览器前缀 + 实验室属性的方式 */
    -webkit-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    /* 实验 */
    backface-visibility: hidden;
}

body {
    font-size: 16px;
}

.container {
    perspective: 8.893333rem /* 333.5/37.5 */;
    transform-style: preserve-3d;
    height: 100%;
}

.load {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #43812b;
    z-index: 1000;
}
.loadImg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2.66666rem;
    height: 2.66666rem;
    /* transform: translate(-50%, -50%); */
    margin: -1.33333rem 0 0 -1.33333rem;
    /* background-color: yellow; */
}
.loadTxt {
    width: 2.666667rem /* 100/37.5 */;
    height:1.333333rem /* 50/37.5 */;
    margin: 0 auto;
    line-height: 1.333333rem /* 50/37.5 */;
    text-align: center;
    font-size: 0.66667rem;
    color: #fff86b;
}
.circle {
    background-color: rgba(0, 0, 0, 0);
    border:.13333rem solid rgba(251, 241, 107, 0.9);
    opacity: 0.9;
    border-right-color: rgba(0,0,0,0);
    border-left-color: rgba(0,0,0,0);
    width: 1.33333rem;
    height: 1.33333rem;
    -webkit-border-radius: 1.33333rem;
    border-radius: 1.33333rem;
    -webkit-box-shadow: 1.33333rem;
    box-shadow: 0 0 .93333rem;
    margin: 0 auto;
    /* css3 属性要加前缀  */
    -webkit-animation: spinPulse 1s infinite ease-in-out;
    animation: spinPulse 1s infinite ease-in-out;
}

@keyframes spinPulse {
    0% {
        -webkit-transform: rotate(160deg);
        transform: rotate(160deg);
        opacity: 0;
        box-shadow: 0 0 1px #2187e7;
    }
    50% {
        -webkit-transform: rotate(145deg);
        transform: rotate(145deg);
        opacity: 1;
    }
    100% {
        -webkit-transform: rotate(-320deg);
        transform: rotate(-320deg);
        opacity: 0;
    }
}

.circle1 {
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
    border: 0.13333rem solid rgba(251, 241, 107, 1);
    border-left-color: rgba(0,0,0,0);
    border-right-color: rgba(0,0,0,0);
    /* 手机页面， Android(webkit) Iphone(webkit)  */
    -webkit-border-radius: 1.33333rem;
    border-radius: 1.33333rem;
    position: relative;
    top: -1.33333rem;
    -webkit-animation: spinoffPulse 1s infinite linear;
    animation: spinoffPulse 1s infinite linear;
}

@keyframes spinoffPulse {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

.global {
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
}

.screen {
    width: 100vw;
    height: 100vh;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.ease {
    transition: all 1.0s ease-in-out;
}
.layer {
    position: absolute;
    transform: rotateX(0deg) translateZ(8.89333rem);
    width: 100vw;
    height: 100vh;
    background-color: green;
}
.layer .inner {
    width: 100%;
    height: 100%;
}

.layer1 {
    background-color: red;
    position: absolute;
    transform: rotateX(0deg) translateZ(8.89333rem);
}

.layer2 {
    position: absolute;
    transform: rotateX(-90deg) translateZ(8.89333rem);
    background-color: yellow;
}
/* .global, .screen, .layer {
    z-index: 1;
} */
.screen_x90 {
    transform: rotateY(0deg) rotateX(90deg);
}


<script src="https://cdn.bootcdn.net/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>世界杯-招商银行</title>
    <script>
    // js 阻塞性  适配 所有css 前面 
    function responsive() {
        const w = window.innerWidth / 10
        // console.log(w);
        // DOM 编程
        // 动态的设置html 字体大小为 1rem , 宽度的1/10 
        document.documentElement.style.fontSize = w + 'px';
        
    }
    responsive();
    window.addEventListener('resize', responsive);
    </script> 
    <link rel="stylesheet" href="./common.css">
</head>
<body>
    <!-- <div class="box"></div> -->
    <div class="container">
        <!-- loading状态 -->
        <div class="load">
            <div class="loadImg">
                <div class="loadTxt">loading</div>
                <div class="circle"></div>
                <div class="circle1"></div>
            </div>
        </div>
        <!-- 3D反转页面 -->
        <div class="global" style="transform:translateZ(-8.89333rem);">
            <div class="screen ease">
                <!-- 首页 -->
                <section class="layer layer1">

                </section>
                <!-- 赛程页面 -->
                <section class="layer layer2"></section>
            </div>
        </div>
    </div>
    <!-- js 手势库 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
    <script>
    // event 不跟html css 静态页面文档流渲染 抢时间 
    // 文档流+盒子模型 =  布局 + CSS 细节 = 静态页面 优先级最高的  
    window.onload = function() {
        const oLoad = document.querySelector('.load');
        const oScreen = document.querySelector('.screen');
        setTimeout(function() {
            // 数据请求要2秒
            //隐藏load 状态元素， 离开了文档流
            oLoad.style.display = 'none';
        }, 2000)
        // setTimeout(function() {
        //     oScreen.classList.add('screen_x90');
        // }, 6000)
        
    }
    </script>
</body>
</html>



const hammerTest = new Hammer(document.querySelector('.container'));
        hammerTest.on('pan panmove', function(ev) {
            console.log(ev);
        })