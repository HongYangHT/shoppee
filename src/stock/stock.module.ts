/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 库存
 * @Date: 2022-09-30 17:19:47
 * @LastEditTime: 2022-09-30 17:27:20
 */
import { Module } from '@nestjs/common';
import {StockController} from './stock.controller';
import {StockService} from './stock.service';

@Module({
    imports: [],
    controllers: [StockController],
    providers: [StockService]
})
export class StockModule {}
