/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 客户
 * @Date: 2022-09-30 17:19:03
 * @LastEditTime: 2022-09-30 17:23:05
 */
import { Module } from '@nestjs/common';
import {CustomerController} from './customer.controller';
import {CustomerService} from './customer.service';

@Module({
    imports: [],
    controllers: [CustomerController],
    providers: [CustomerService],
})
export class CustomerModule {}
