let request = require('request-promise')
let fs = require('fs')  // 后端 操作系统 I/O 网络 硬件     前端 浏览器   
const cheerio = require('cheerio')
let url = 'https://movie.douban.com/top250'

const main = async () => {
    let html = await request({
        url
    })
    let movies = []
    // console.log(html)
    let $ = cheerio.load(html) // 在内存中构造一个dom树
    let movieNodes = $('#content .article .grid_view').find('.item')
    // console.log(movieNodes)
    for(let movieNode of movieNodes){
        let item = cheerio.load(movieNode)
        let titles = $('.info .hd span')
        // console.log(Object.prototype.toString.call(titles),'----------------')
        titles = [].map.call(titles,t => {
            return $(t).text()
        })
        // console.log(titles)
        let bd = $('.info .bd')
        let info = bd.find('p').text()
        let score = bd.find('.star .rating_num').text()
        if(titles.length){
            movies.push({titles,info,score})
        }
    }
    // console.log(movies)
    fs.writeFile('./output.json',JSON.stringify(movies),'utf-8',() => {
        console.log('生成json文件成功！')
    })
}

main()