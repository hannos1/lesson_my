const mysql = require('mysql2')  // mysql驱动
const config = require('../config/default.js')

const pool = mysql.createPool({ // 链接池
    host:config.database.HOST,
    user:config.database.USERNAME,
    password:config.database.PASSWORD,
    database:config.database.DATABASE,
    port:config.database.PORT
})

// sql语句必传
// values CRUD
let query = (sql,values) => {
    return new Promise((resolve,reject) => {
        pool.getConnection((err,connection) => {  // 事务链接
            if(err){
                reject(err)
            }else{
                connection.query(sql,values,(err,rows)=>{  // 提交事务
                    if(err){
                        reject(err)
                    }else{
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

exports.findDataCountByName = (name) => {
    let _sql = `select count(*) as count from users where name="${name}"`
    return query(_sql)
}

let users = 
    `create table if not exists users(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL COMMENT '用户名',
        pass VARCHAR(100) NOT NULL COMMENT '密码',
        avatar VARCHAR(100) NOT NULL COMMENT '头像',
        moment VARCHAR(100) NOT NULL COMMENT '注册时间',
        PRIMARY KEY(id),
        UNIQUE KEY(name) 
    );`

let createTable = (sql) => {
    return query(sql,[])
}

createTable(users)  // 被引入时就会创建这个表，if not exists 防止重复创建