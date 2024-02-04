import { DietDto } from '@/application/dto/diet/request/create/diet.dto';
import { FoodDto } from '@/application/dto/diet/request/create/nested/food.dto';
import { CreateDietResponseDto } from '@/application/dto/diet/response/create/create-diet-response.dto';
import { DietBaseServiceInterface } from '@/core/entity/diet/use-cases/base-service.interface';
import { CreateFoodsService } from '@/core/entity/food/use-cases/create/create.service';
import { DatasourceDietPort } from '@/datasource/ports/datasource-diet.port';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Diet } from '@prisma/client';

@Injectable()
export class CreateDietService implements DietBaseServiceInterface<DietDto, Promise<CreateDietResponseDto>> {
    constructor(private readonly dietRepository: DatasourceDietPort<DietDto, Promise<Diet>>,
        private readonly createFoodService: CreateFoodsService) { }

    async execute(diet: DietDto): Promise<CreateDietResponseDto> {
        const { id } = await this.persistDiet(diet)
        await this.createDietsFood(id, diet.foods);
        return { dietId: id }
    }

    private async createDietsFood(dietId: string, foods: FoodDto[]) {
        await this.createFoodService.execute(foods, dietId)
    }

    private async persistDiet(diet: DietDto): Promise<Diet> {
        try {
            return await this.dietRepository.create(diet);
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
