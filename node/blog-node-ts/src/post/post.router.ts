import express from 'express';
import * as postController from './post.controller';

const router = express.Router();
/**
 * 内容列表
 * restful api
 * 返回JSON
 * MVC MV不能直接沟通 Controller
 */
router.get(
    '/posts',
    postController.index
)

export default router;