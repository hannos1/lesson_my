// node的模块化是 commonjs
console.log('webpack 运行了......')
module.exports = {
    //入口
    entry:'./main.js',
    output:{
        filename:'./bundle.js'
    }
}