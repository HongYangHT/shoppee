/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 利润
 * @Date: 2022-09-30 17:19:40
 * @LastEditTime: 2022-09-30 17:26:31
 */
import { Module } from '@nestjs/common';
import {ProfitController} from './profit.controller';
import {ProfitService} from './profit.service';

@Module({
    imports: [],
    controllers: [ProfitController],
    providers: [ProfitService]
})
export class ProfitModule {}
