- sqlserver mysql 关系型数据库
- mongodb NOSQL  存储JSON文档


- blog
    - 用户表
        登录 鉴权 + role 分配
        id(自增 int11)  username(varchar)  password(varchar 不能存明文, hash 加密)
        索引？ Primary Key (`id`)   查询更快  


        1. 密码不能存明文， java/node mvc 用户表单传过来的password 123456
          md5 单向加密的方式 先加密再存在数据库
            数据库被攻击，解密
            md5(123456) == password
        2. create table 'user' (
            field int(11) auto_increment not null,
                    varchar(255)
                    longtext 文章之类的
                primary key ('id')    主键
                unique key 'name'('name')   除了主索引外，其他索引 都取索引名 
        ) engine = 

        web http  默认服务 80

        select * from user where id = 1; O(1)

- create database blog    新建blog 项目对应的数据库
    MySQL  3306  启动的数据服务
    java/node/go 3000 http服务 sql请求


- 文章列表？ select 索引 index 查询更快 查询上利用索引

    文章表
    用户表

    文章的列表(包含用户信息)