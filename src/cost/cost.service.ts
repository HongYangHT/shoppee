/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: function description
 * @Date: 2022-09-30 17:10:21
 * @LastEditTime: 2022-09-30 17:32:12
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CostService {
    getHello() {
        return 'hello cost';
    }
}
