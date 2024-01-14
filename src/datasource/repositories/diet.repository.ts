import { DietDto } from "@/application/dto/request/create-diet/diet.dto";
import { Diet, PrismaClient } from "@prisma/client";

export class DietRepository {
    prisma = new PrismaClient();

    async create(diet: DietDto): Promise<Diet> {
        return await this.prisma.diet.create({
            data: {
                name: diet.name,
            }
        });
    }
}