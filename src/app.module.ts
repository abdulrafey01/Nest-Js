import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { ProductsModule } from './products/products.module';
import { CatsService } from './cats.service';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, CatsController],
  providers: [AppService,CatsService],
})
export class AppModule {}
