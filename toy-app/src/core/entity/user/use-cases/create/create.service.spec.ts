import { Test, TestingModule } from '@nestjs/testing';
import { CreateService } from '@/core/entity/user/use-cases/create/create.service';

describe('CreateService', () => {
  let service: CreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateService],
    }).compile();

    service = module.get<CreateService>(CreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
