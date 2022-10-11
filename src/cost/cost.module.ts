/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 成本
 * @Date: 2022-09-30 17:16:49
 * @LastEditTime: 2022-10-10 15:06:52
 */
import { Module } from '@nestjs/common';
import {CostController} from './cost.controller';
import {CostService} from './cost.service';

@Module({
    imports: [],
    controllers: [CostController],
    providers: [CostService],
    exports: [CostService]
})
export class CostModule {}
