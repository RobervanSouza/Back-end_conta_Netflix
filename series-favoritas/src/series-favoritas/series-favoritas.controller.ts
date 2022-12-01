import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeriesFavoritasService } from './series-favoritas.service';
import { CreateSeriesFavoritaDto } from './dto/create-series-favorita.dto';
import { UpdateSeriesFavoritaDto } from './dto/update-series-favorita.dto';

@Controller('series-favoritas')
export class SeriesFavoritasController {
  constructor(private readonly seriesFavoritasService: SeriesFavoritasService) {}

  @Post()
  create(@Body() createSeriesFavoritaDto: CreateSeriesFavoritaDto) {
    return this.seriesFavoritasService.create(createSeriesFavoritaDto);
  }

  @Get()
  findAll() {
    return this.seriesFavoritasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seriesFavoritasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeriesFavoritaDto: UpdateSeriesFavoritaDto) {
    return this.seriesFavoritasService.update(+id, updateSeriesFavoritaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seriesFavoritasService.remove(+id);
  }
}
