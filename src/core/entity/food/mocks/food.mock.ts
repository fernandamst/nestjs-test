import { Food } from "@prisma/client";

export class FoodMock {
    public static dietId(): string {
        return '66300ed5-1745-45df-b9a6-b39cade7fc8e'
    }

    public static foods() {
        return [
            { name: 'cricket' },
            { name: 'worms' },
        ]
    }


    public static formatedFoods() {
        return [
            { dietId: '66300ed5-1745-45df-b9a6-b39cade7fc8e', name: 'cricket' },
            { dietId: '66300ed5-1745-45df-b9a6-b39cade7fc8e', name: 'worms' },
        ]
    }

    public static food(): Food {
        return {
            id: '66300ed5-1745-45df-b9a6-b39cade7fc8e',
            dietId: '66300ed5-1745-45df-b9a6-b39cade7fc8e',
            name: 'cricket',
            createdAt: new Date('66300ed5-1745-45df-b9a6-b39cade7fc8e'),
            updatedAt: new Date('66300ed5-1745-45df-b9a6-b39cade7fc8e')
        }
    }
}