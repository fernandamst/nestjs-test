
import { DietDto } from '@/application/dto/request/create-diet/diet.dto';
import { CreateDietService } from '@/core/entity/diet/use-cases/create/create.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
    private readonly createDietService: CreateDietService) { }

  //TODO: document with decorators when swagger config is implemented
  @Post('/diet')
  createDiet(@Body() diet: DietDto): any {
    return this.createDietService.execute(diet);
  }
}
