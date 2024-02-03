import { DietDto } from '@/application/dto/diet/request/create/diet.dto';
import { FoodDto } from '@/application/dto/diet/request/create/nested/food.dto';
import { CreateDietResponseDto } from '@/application/dto/diet/response/create/create-diet-response.dto';
import { BaseServiceInterface } from '@/core/base-service.interface';
import { DatasourceDietPort } from '@/datasource/ports/datasource-diet.port';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Diet } from '@prisma/client';

@Injectable()
export class CreateDietService implements BaseServiceInterface<DietDto, null, Promise<CreateDietResponseDto>> {
    constructor(private readonly dietRepository: DatasourceDietPort<DietDto, Promise<Diet>>) { }

    async execute(diet: DietDto): Promise<CreateDietResponseDto> {
        const { id } = await this.persistDiet(diet)
        this.createDietsFood(id, diet.foods);
        return;
    }

    private createDietsFood(dietId: string, foods: FoodDto[]) {
        //TODO: call food service create
        return;
    }

    private async persistDiet(diet: DietDto): Promise<Diet> {
        try {
            return await this.dietRepository.create(diet);
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException();
        }
    }
}
