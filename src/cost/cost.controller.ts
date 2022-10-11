/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: function description
 * @Date: 2022-09-30 17:10:07
 * @LastEditTime: 2022-10-10 14:41:33
 */
import { Controller, Get, HttpException, HttpStatus, Logger, Query, Req } from '@nestjs/common';
import {CostService} from './cost.service';

@Controller('cost')
export class CostController {
    constructor(private readonly costService: CostService) {}

  @Get()
  getHello(@Query('costId') costId: string): string {
    // return this.costService.getHello();
    const logger = new Logger('Shoppee move');
    logger.log(costId);
    throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN);
  }

  
}
