/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 商品
 * @Date: 2022-09-30 17:19:14
 * @LastEditTime: 2022-09-30 17:22:24
 */
import { Module } from '@nestjs/common';
import {GoodsController} from './goods.controller';
import {GoodsService} from './goods.service';

@Module({
    imports: [],
    controllers: [GoodsController],
    providers: [GoodsService]
})
export class GoodsModule {}
