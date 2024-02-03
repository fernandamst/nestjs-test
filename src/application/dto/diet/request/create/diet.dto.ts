import { FoodDto } from "@/application/dto/diet/request/create/nested/food.dto";

export class DietDto {
    name: string;
    foods: FoodDto[]
}