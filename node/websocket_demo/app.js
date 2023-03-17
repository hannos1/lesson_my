const WebSocket = require('ws');  // 基于tcp/ip 
const http = require('http'); // node 内置

// 在某个端口启动的程序
// ip 定位服务器  端口号 确认进程
const wss = new WebSocket.Server({
    port:3000
})

wss.on('connection',(ws) => {
    ws.on('message',(message) => {
        let msgData = JSON.parse(message)
        // console.log(message,msgData,'////')
        wss.clients.forEach(client => {
            client.send(message)
        })
    })
})
