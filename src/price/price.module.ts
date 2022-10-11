/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 定价
 * @Date: 2022-09-30 17:19:33
 * @LastEditTime: 2022-09-30 17:25:34
 */
import { Module } from '@nestjs/common';
import {PriceController} from './price.controller';
import {PriceService} from './price.service';

@Module({
    imports: [],
    controllers: [PriceController],
    providers: [PriceService]
})
export class PriceModule {}
