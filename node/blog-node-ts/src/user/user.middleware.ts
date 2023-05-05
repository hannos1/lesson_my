import { NextFunction,Request,Response } from "express";
import bcrypt from 'bcryptjs';
import * as userService from './user.service';
/**
 * HASH密码 
 */
export const hashPassword = async (
    request:Request,
    response:Response,
    next:NextFunction
) => {
    const {password} = request.body
    request.body.password = await bcrypt.hash(password,10) // 这里的类型为string
    next()
}

/**
 * 验证用户数据
 */
export const validateUserData = async (
    request:Request,
    response:Response,
    next:NextFunction
) => {
    const {name,password} = request.body;
    // 使用错误处理中间件
    if(!name) return next(new Error('NAME_IS_REQUIRED'));
    if(!password) return next(new Error('PASSWORD_IS_REQUIRED'));

    // name 是否重名 service层 sql处理
    const user = await userService.getUserByName(name);
    if(user) return next(new Error('NAME_ALREADY_EXIST'));
    next();
}