/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: function description
 * @Date: 2022-09-30 16:47:54
 * @LastEditTime: 2022-10-11 19:50:39
 */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LoggerMiddleware} from './common/middleware';
import { CostModule } from './cost/cost.module';
import { CustomerModule } from './customer/customer.module';
import { GoodsModule } from './goods/goods.module';
import { LoginModule } from './login/login.module';
import { OrderModule } from './order/order.module';
import { PriceModule } from './price/price.module';
import { ProfitModule } from './profit/profit.module';
import { StockModule } from './stock/stock.module';
import { SupplierModule } from './supplier/supplier.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CostModule, CustomerModule, GoodsModule, LoginModule, OrderModule, PriceModule, ProfitModule, StockModule, SupplierModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes({ path: '*', method: RequestMethod.ALL });
//   }
// }
