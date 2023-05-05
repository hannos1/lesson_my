import dotenv from 'dotenv';  // 私密数据保险箱

dotenv.config()  // 去根目录下找到.env执行 并且添加到process.env对象中

/**
 * 应用配置
 * process 进程对象 程序分配资源的最小单元
 * thread 线程 程序运行的最小单元
 * GPU 显卡 更适合并行计算  css transform 3D  canvas 3D
 * CPU 适合线性计算  
 * process.env 环境变量
 * 不装@types/node的话默认作为前端js静态编译 不支持process
 */
console.log(process.env,'/////')
export const {APP_PORT} = process.env

/**
 * 数据库配置
 */
export const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = process.env

export const {ALLOW_ORIGIN} = process.env

export let {PUBLIC_KEY} = process.env 
PUBLIC_KEY = Buffer.from(PUBLIC_KEY,'base64').toString()