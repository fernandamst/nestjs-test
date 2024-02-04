import { DatasourceReptilePort } from "@/datasource/ports/datasource-reptile.port";
import { Prisma, PrismaClient, Reptile } from "@prisma/client";

export class ReptileRepository implements DatasourceReptilePort<string, Prisma.ReptileCreateInput, Promise<Reptile>>{
    prisma = new PrismaClient();

    async create(dietId: string, reptile: Prisma.ReptileCreateInput): Promise<Reptile> {
        return await this.prisma.reptile.create({
            data: {
                ...reptile,
                diet: {
                    connect: {
                        id: dietId
                    }
                }
            }
        });
    }
}