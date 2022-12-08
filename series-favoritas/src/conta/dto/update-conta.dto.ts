import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContaDto } from './create-conta.dto';

export class UpdateContaDto extends PartialType(CreateContaDto) {
  @ApiProperty()
  id: string;
}
