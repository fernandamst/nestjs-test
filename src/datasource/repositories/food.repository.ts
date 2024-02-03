import { DatasourceFoodPort } from "@/datasource/ports/datasource-food.port";
import { Prisma, PrismaClient } from "@prisma/client";

export class FoodRepository implements DatasourceFoodPort<Prisma.FoodCreateInput[], any> {
    prisma = new PrismaClient();

    async create(food: Prisma.FoodCreateInput[]) {
        return await this.prisma.food.createMany({
            data: [
                ...food
            ]

        });

    }
}