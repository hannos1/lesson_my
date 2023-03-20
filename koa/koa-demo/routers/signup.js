const router = require('koa-router')();  // 路由对象
// 控制权交给control 层
const controller = require('../controller/c-signup')
router.get('/signup',controller.getSignup)
router.post('/signup',controller.postSignup)


module.exports = router