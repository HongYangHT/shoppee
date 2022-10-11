/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 用户
 * @Date: 2022-09-30 17:20:00
 * @LastEditTime: 2022-09-30 17:29:01
 */
import { Module } from '@nestjs/common';
import {UserController} from './user.controller';
import {UserService} from './user.service';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
