
import { CreateReptileDto } from '@/application/dto/reptile/request/create/create.dto';
import { CreateReptileResponseDto } from '@/application/dto/reptile/response/create-response.dto';
import { CreateReptileService } from '@/core/entity/reptile/use-cases/create/create.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class ReptileController {
    constructor(
        private readonly createReptileService: CreateReptileService,) { }

    //TODO: document with decorators when swagger config is implemented
    @Post('/reptile')
    createDiet(@Body() reptile: CreateReptileDto): Promise<CreateReptileResponseDto> {
        return this.createReptileService.execute(reptile);
    }
}
