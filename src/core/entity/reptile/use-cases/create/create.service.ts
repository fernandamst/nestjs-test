import { CreateReptileDto } from '@/application/dto/reptile/request/create/create.dto';
import { CreateReptileResponseDto } from '@/application/dto/reptile/response/create-response.dto';
import { ReptileBaseServiceInterface } from '@/core/entity/reptile/use-cases/base-service.interface';
import { DatasourceReptilePort } from '@/datasource/ports/datasource-reptile.port';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Prisma, Reptile } from '@prisma/client';

@Injectable()
export class CreateReptileService implements ReptileBaseServiceInterface<CreateReptileDto, Promise<CreateReptileResponseDto>>{
    constructor(private readonly reptileRepository: DatasourceReptilePort<string, Prisma.ReptileCreateInput, Promise<Reptile>>) { }
    async execute(reptile: CreateReptileDto): Promise<CreateReptileResponseDto> {
        const { dietId, reptileData } = this.separateRequestBody(reptile);
        const { id } = await this.persistReptile(dietId, reptileData);
        return { reptileId: id }
    }

    private async persistReptile(dietId: string, reptile: Prisma.ReptileCreateInput): Promise<Reptile> {
        try {
            return await this.reptileRepository.create(dietId, reptile)
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    private separateRequestBody(body: CreateReptileDto) {
        const { dietId, ...reptileData } = body
        return { dietId, reptileData };
    }
}
