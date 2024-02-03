import { FoodPrismaCreateInputFactory } from '@/core/entity/food/factory/food-prisma-input.factory';
import { FoodRepositoryMock } from '@/core/entity/food/mocks/food-repository.mock';
import { FoodMock } from '@/core/entity/food/mocks/food.mock';
import { CreateFoodsService } from '@/core/entity/food/use-cases/create/create.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CreateFoodsService', () => {
  let service: CreateFoodsService;
  let foodRepository: FoodRepositoryMock;
  let foodInputFactory: FoodPrismaCreateInputFactory

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFoodsService, FoodRepositoryMock, FoodPrismaCreateInputFactory],
    }).compile();

    service = module.get<CreateFoodsService>(CreateFoodsService);
    foodRepository = module.get<FoodRepositoryMock>(FoodRepositoryMock)
    foodInputFactory = module.get<FoodPrismaCreateInputFactory>(FoodPrismaCreateInputFactory)
  });


  describe('When creating foods', () => {
    it('should create register in database', async () => {
      jest.spyOn(foodInputFactory, 'generate').mockReturnValue(FoodMock.formatedFoods())
      const repositorySpy = jest.spyOn(foodRepository, 'create')

      await foodRepository.create(FoodMock.formatedFoods())
      await service.execute(FoodMock.foods(), FoodMock.dietId())

      expect(repositorySpy.mock.calls.length).toBeGreaterThan(0)
      expect(repositorySpy.mock.results[0].value).toEqual(FoodMock.food())
    });
  })
});
