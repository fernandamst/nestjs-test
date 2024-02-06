import { ReptileRepositoryMock } from '@/core/entity/reptile/mocks/reptile-repository.mock';
import { ReptileMock } from '@/core/entity/reptile/mocks/reptile.mock';
import { CreateReptileService } from '@/core/entity/reptile/use-cases/create/create.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CreateReptileService', () => {
  let service: CreateReptileService;
  let reptileRepository: ReptileRepositoryMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateReptileService,
        ReptileRepositoryMock],
    }).compile();

    service = module.get<CreateReptileService>(CreateReptileService);
    reptileRepository = module.get<ReptileRepositoryMock>(ReptileRepositoryMock)
  });

  describe('When service is invoked', () => {
    it('should persist reptile in database', async () => {
      const repositorySpy = jest.spyOn(reptileRepository, 'create')

      await reptileRepository.create(ReptileMock.dietId(), ReptileMock.reptilePrismaInput())
      await service.execute(ReptileMock.createRequestBody())

      expect(repositorySpy.mock.calls.length).toBeGreaterThan(0)
      expect(repositorySpy.mock.results[0].value).toEqual(ReptileMock.reptile())
    });
  })

});
