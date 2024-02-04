import { DatasourceDietPort } from '@/datasource/ports/datasource-diet.port';
import { DatasourceFoodPort } from '@/datasource/ports/datasource-food.port';
import { DatasourceReptilePort } from '@/datasource/ports/datasource-reptile.port';
import { DietRepository } from '@/datasource/repositories/diet.repository';
import { FoodRepository } from '@/datasource/repositories/food.repository';
import { ReptileRepository } from '@/datasource/repositories/reptile.repository';
import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Module({
    imports: [],
    providers: [
        PrismaClient,
        DietRepository,
        {
            provide: DatasourceDietPort,
            useExisting: DietRepository
        },
        FoodRepository,
        {
            provide: DatasourceFoodPort,
            useExisting: FoodRepository
        },
        ReptileRepository,
        {
            provide: DatasourceReptilePort,
            useExisting: ReptileRepository
        }],
    exports: [DatasourceFoodPort, DatasourceDietPort, DatasourceReptilePort]
})
export class DatasourceModule { }
