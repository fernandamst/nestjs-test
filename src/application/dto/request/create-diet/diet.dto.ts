import { FoodDto } from "@/application/dto/request/create-diet/nested/food.dto";

export class DietDto {
    name: string;
    foods: FoodDto[]
}