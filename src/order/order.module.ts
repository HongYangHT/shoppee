/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 订单
 * @Date: 2022-09-30 17:19:27
 * @LastEditTime: 2022-09-30 17:24:36
 */
import { Module } from '@nestjs/common';
import {OrderController} from './order.controller';
import {OrderService} from './order.service';

@Module({
    imports: [],
    controllers: [OrderController],
    providers: [OrderService]
})
export class OrderModule {}
