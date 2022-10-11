/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 供应商
 * @Date: 2022-09-30 17:19:55
 * @LastEditTime: 2022-09-30 17:28:14
 */
import { Module } from '@nestjs/common';
import {SupplierController} from './supplier.controller';
import {SupplierService} from './supplier.service';

@Module({
    imports: [],
    controllers: [SupplierController],
    providers: [SupplierService],
})
export class SupplierModule {}
