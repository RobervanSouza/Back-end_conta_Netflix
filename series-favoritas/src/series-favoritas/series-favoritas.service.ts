import { Injectable } from '@nestjs/common';
import { CreateSeriesFavoritaDto } from './dto/create-series-favorita.dto';
import { UpdateSeriesFavoritaDto } from './dto/update-series-favorita.dto';

@Injectable()
export class SeriesFavoritasService {
  create(createSeriesFavoritaDto: CreateSeriesFavoritaDto) {
    return 'This action adds a new seriesFavorita';
  }

  findAll() {
    return `This action returns all seriesFavoritas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seriesFavorita`;
  }

  update(id: number, updateSeriesFavoritaDto: UpdateSeriesFavoritaDto) {
    return `This action updates a #${id} seriesFavorita`;
  }

  remove(id: number) {
    return `This action removes a #${id} seriesFavorita`;
  }
}
