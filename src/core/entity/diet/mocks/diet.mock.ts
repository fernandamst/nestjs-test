import { DietDto } from "@/application/dto/diet/request/create/diet.dto";
import { FoodDto } from "@/application/dto/diet/request/create/nested/food.dto";
import { Diet } from "@prisma/client";

export class DietMock {
    public static dietId(): string {
        return '66300ed5-1745-45df-b9a6-b39cade7fc8e'
    }

    public static createRequestBody(): DietDto {
        return {
            name: 'Oviparous',
            foods: [
                { name: 'cricket' },
                { name: 'worms' },
            ]
        }
    }

    public static foods(): FoodDto[] {
        return [
            { name: 'cricket' },
            { name: 'worms' },
        ]
    }

    public static diet(): Diet {
        return {
            id: '66300ed5-1745-45df-b9a6-b39cade7fc8e',
            name: 'Oviparous',
            createdAt: new Date('66300ed5-1745-45df-b9a6-b39cade7fc8e'),
            updatedAt: new Date('66300ed5-1745-45df-b9a6-b39cade7fc8e')
        }
    }
}