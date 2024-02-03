
import { DietDto } from '@/application/dto/diet/request/create/diet.dto';
import { CreateDietResponseDto } from '@/application/dto/diet/response/create/create-diet-response.dto';
import { CreateDietService } from '@/core/entity/diet/use-cases/create/create.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
    private readonly createDietService: CreateDietService) { }

  //TODO: document with decorators when swagger config is implemented
  @Post('/diet')
  createDiet(@Body() diet: DietDto): Promise<CreateDietResponseDto> {
    return this.createDietService.execute(diet)
  }
}
