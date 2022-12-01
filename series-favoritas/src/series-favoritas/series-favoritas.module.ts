import { Module } from '@nestjs/common';
import { SeriesFavoritasService } from './series-favoritas.service';
import { SeriesFavoritasController } from './series-favoritas.controller';

@Module({
  controllers: [SeriesFavoritasController],
  providers: [SeriesFavoritasService]
})
export class SeriesFavoritasModule {}
