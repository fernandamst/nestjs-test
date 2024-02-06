import { DietRepositoryMock } from '@/core/entity/diet/mocks/diet-repository.mock';
import { DietMock } from '@/core/entity/diet/mocks/diet.mock';
import { CreateDietService } from '@/core/entity/diet/use-cases/create/create.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CreateDietService', () => {
  let service: CreateDietService;
  let dietRepository: DietRepositoryMock

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateDietService, DietRepositoryMock],
    }).compile();

    service = module.get<CreateDietService>(CreateDietService);
    dietRepository = module.get<DietRepositoryMock>(DietRepositoryMock);
  });

  describe('When service is invoked', () => {
    it('should persist diet in database', async () => {
      const repositorySpy = jest.spyOn(dietRepository, 'create')

      await dietRepository.create(DietMock.createRequestBody())
      await service.execute(DietMock.createRequestBody())

      expect(repositorySpy.mock.calls.length).toBeGreaterThan(0)
      expect(repositorySpy.mock.results[0].value).toEqual(DietMock.diet())
    });
  })
});
