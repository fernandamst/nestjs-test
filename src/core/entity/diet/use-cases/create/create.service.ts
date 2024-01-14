import { DietDto } from '@/application/dto/request/create-diet/diet.dto';
import { FoodDto } from '@/application/dto/request/create-diet/nested/food.dto';
import { BaseServiceInterface } from '@/core/base-service.interface';
import { DietRepository } from '@/datasource/repositories/diet.repository';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Diet } from '@prisma/client';

@Injectable()
export class CreateDietService implements BaseServiceInterface<DietDto, null, any> {
    constructor(private readonly dietRepository: DietRepository) { }

    async execute(diet: DietDto): Promise<any> {
        let registeredDiet: Diet;
        try {
            registeredDiet = await this.dietRepository.create(diet);
        } catch (error) {
            throw new InternalServerErrorException();
        }
        return this.createDietsFood(registeredDiet.id, diet.foods);
    }

    private createDietsFood(dietId: string, foods: FoodDto[]): void {
        //TODO: call food service create
    }
}
