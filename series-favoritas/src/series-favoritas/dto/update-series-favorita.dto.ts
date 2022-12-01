import { PartialType } from '@nestjs/swagger';
import { CreateSeriesFavoritaDto } from './create-series-favorita.dto';

export class UpdateSeriesFavoritaDto extends PartialType(CreateSeriesFavoritaDto) {}
