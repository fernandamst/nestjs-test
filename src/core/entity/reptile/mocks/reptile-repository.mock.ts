import { ReptileMock } from "@/core/entity/reptile/mocks/reptile.mock";
import { DatasourceReptilePort } from "@/datasource/ports/datasource-reptile.port";
import { Prisma, Reptile } from "@prisma/client";

export class ReptileRepositoryMock implements DatasourceReptilePort<string, Prisma.ReptileCreateInput, Promise<Reptile>>{
    async create(dietId: string, reptile: Prisma.ReptileCreateInput): Promise<Reptile> {
        return ReptileMock.reptile()
    }
}