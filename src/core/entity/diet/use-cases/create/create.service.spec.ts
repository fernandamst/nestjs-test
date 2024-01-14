import { Test, TestingModule } from '@nestjs/testing';
import { CreateDietService } from './create.service';

describe('CreateService', () => {
  let service: CreateDietService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateDietService],
    }).compile();

    service = module.get<CreateDietService>(CreateDietService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
