import { DatasourceDietPort } from '@/datasource/ports/datasource-diet.port';
import { DatasourceFoodPort } from '@/datasource/ports/datasource-food.port';
import { DietRepository } from '@/datasource/repositories/diet.repository';
import { FoodRepository } from '@/datasource/repositories/food.repository';
import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Module({
    imports: [],
    providers: [PrismaClient, DietRepository, {
        provide: DatasourceDietPort,
        useExisting: DietRepository
    }, FoodRepository, {
            provide: DatasourceFoodPort,
            useExisting: FoodRepository
        }],
    exports: [DatasourceFoodPort, DatasourceDietPort]
})
export class DatasourceModule { }
