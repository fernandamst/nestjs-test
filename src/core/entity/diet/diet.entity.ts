import { FoodEntity } from "@/core/entity/food/food.entity";

export class DietEntity {
    name: string;
    foods: FoodEntity[]

    constructor(name: string, foods: FoodEntity[]) {
        this.name = name;
        this.foods = foods;
    }
}