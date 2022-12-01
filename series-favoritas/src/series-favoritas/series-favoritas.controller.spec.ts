import { Test, TestingModule } from '@nestjs/testing';
import { SeriesFavoritasController } from './series-favoritas.controller';
import { SeriesFavoritasService } from './series-favoritas.service';

describe('SeriesFavoritasController', () => {
  let controller: SeriesFavoritasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeriesFavoritasController],
      providers: [SeriesFavoritasService],
    }).compile();

    controller = module.get<SeriesFavoritasController>(SeriesFavoritasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
