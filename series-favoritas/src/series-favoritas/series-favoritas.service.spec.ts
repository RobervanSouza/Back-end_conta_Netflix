import { Test, TestingModule } from '@nestjs/testing';
import { SeriesFavoritasService } from './series-favoritas.service';

describe('SeriesFavoritasService', () => {
  let service: SeriesFavoritasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesFavoritasService],
    }).compile();

    service = module.get<SeriesFavoritasService>(SeriesFavoritasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
