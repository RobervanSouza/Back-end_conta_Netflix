import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateListaUsuarioDto {
  @ApiProperty()
  @IsString()
  contaId: string;
}
