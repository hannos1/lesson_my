import { NextFunction,Request,Response } from "express";
import * as userService from './user.service'

export const store = async (
    request:Request,
    response:Response,
    next:NextFunction
) => {
    const {name,password} = request.body;
    console.log(name,password,'/////');
    // sql 数据库和node服务器是分离的
    try{    
        const data = await userService.createUser({name,password});
        response.status(201).send(data);
    }catch(error){
        next(error)
    }
}