import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateContaDto {
  @ApiProperty()
  @IsString()
  series: string;
  @ApiProperty()
  @IsString()
  filmes: string;
  @ApiProperty()
  @IsString()
  documentarios: string;
  @ApiProperty()
  @IsString()
  desenhos: string;
  @ApiProperty()
  @IsString()
  shows: string;
  @ApiProperty()
  usuariosIds?: string[];
  @ApiProperty()
  adminIds?: string[];
}
