import { DietDto } from "@/application/dto/diet/request/create/diet.dto";
import { DietMock } from "@/core/entity/diet/mocks/diet.mock";
import { DatasourceDietPort } from "@/datasource/ports/datasource-diet.port";
import { Diet } from "@prisma/client";

export class DietRepositoryMock implements DatasourceDietPort<DietDto, Promise<Diet>>{
    async create(diet: DietDto) {
        return DietMock.diet()
    }
}