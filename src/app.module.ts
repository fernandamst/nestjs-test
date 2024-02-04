import { DietController } from '@/application/controller/diet.controller';
import { ReptileController } from '@/application/controller/reptile.controller';
import { CreateDietService } from '@/core/entity/diet/use-cases/create/create.service';
import { FoodPrismaCreateInputFactory } from '@/core/entity/food/factory/food-prisma-input.factory';
import { CreateFoodsService } from '@/core/entity/food/use-cases/create/create.service';
import { CreateReptileService } from '@/core/entity/reptile/use-cases/create/create.service';
import { DatasourceModule } from '@/datasource/datasource.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatasourceModule],
  controllers: [DietController, ReptileController],
  providers: [CreateDietService, CreateFoodsService, FoodPrismaCreateInputFactory, CreateReptileService],
})
export class AppModule { }
