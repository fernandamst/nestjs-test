import { AppController } from '@/application/controller/app.controller';
import { CreateDietService } from '@/core/entity/diet/use-cases/create/create.service';
import { FoodPrismaCreateInputFactory } from '@/core/entity/food/factory/food-prisma-input.factory';
import { CreateFoodsService } from '@/core/entity/food/use-cases/create/create.service';
import { DatasourceModule } from '@/datasource/datasource.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatasourceModule],
  controllers: [AppController],
  providers: [CreateDietService, CreateFoodsService, FoodPrismaCreateInputFactory],
})
export class AppModule { }
