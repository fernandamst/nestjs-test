import { FoodMock } from "@/core/entity/food/mocks/food.mock";
import { DatasourceFoodPort } from "@/datasource/ports/datasource-food.port";
import { Prisma } from "@prisma/client";

export class FoodRepositoryMock implements DatasourceFoodPort<Prisma.FoodCreateInput[], any>{
    create(foods: Prisma.FoodCreateInput[]) {
        return FoodMock.food()
    }
}