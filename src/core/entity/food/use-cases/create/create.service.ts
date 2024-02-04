
import { FoodDto } from '@/application/dto/diet/request/create/nested/food.dto';
import { FoodPrismaCreateInputFactory } from '@/core/entity/food/factory/food-prisma-input.factory';
import { FoodBaseServiceInterface } from '@/core/entity/food/use-cases/base-service.interface';
import { DatasourceFoodPort } from '@/datasource/ports/datasource-food.port';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class CreateFoodsService implements FoodBaseServiceInterface<FoodDto[], string, Promise<void>>{
    constructor(private readonly foodRepository: DatasourceFoodPort<Prisma.FoodCreateInput[], any>, private readonly foodInputFactory: FoodPrismaCreateInputFactory) { }

    async execute(foods: FoodDto[], dietId: string,): Promise<void> {
        const foodsCreatedInput = this.formatFoods(dietId, foods)
        await this.persistFoods(foodsCreatedInput);
        return;
    }

    private formatFoods(dietId: string, foods: FoodDto[]): Prisma.FoodCreateInput[] {
        return this.foodInputFactory.generate(dietId, foods)
    }

    private async persistFoods(foods: Prisma.FoodCreateInput[]) {
        try {
            return await this.foodRepository.create(foods)
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
}
