import express from 'express';  // 老牌的node 开发框架
import cors from 'cors';
import {ALLOW_ORIGIN} from './app.config';
import postRouter from '../post/post.router';

/**
 * 创建应用
 */
const app = express();

/**
 * 跨域资源共享
 */
app.use(
    cors({
        origin:ALLOW_ORIGIN,
        // 可以跨域资源共享的头部
        exposedHeaders:'X-Total-Count'
    }) 
);

/**
 * 路由
 */
app.use(
    postRouter
)

/**
 * 导出应用
 */
export default app