/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 登录
 * @Date: 2022-09-30 17:19:22
 * @LastEditTime: 2022-09-30 17:22:53
 */
import { Module } from '@nestjs/common';
import {LoginController} from './login.controller';
import {LoginService} from './login.service';

@Module({
    imports: [],
    controllers: [LoginController],
    providers: [LoginService]
})
export class LoginModule {}
