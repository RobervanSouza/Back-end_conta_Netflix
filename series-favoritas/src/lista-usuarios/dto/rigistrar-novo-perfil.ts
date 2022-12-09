import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegistrarPerfilDto {
  @ApiProperty()
  @IsString()
  perfilId: string;
  @ApiProperty()
  @IsString()
  userId: string;
}
