import { FoodDto } from "@/application/dto/diet/request/create/nested/food.dto";
import { Prisma } from "@prisma/client";

export class FoodPrismaCreateInputFactory {
    generate(dietId: string, foods: FoodDto[]): Prisma.FoodCreateInput[] {
        let formatedFood = []
        foods.forEach((food) => {
            formatedFood.push({ dietId, name: food.name })
        })
        return formatedFood
    }
}