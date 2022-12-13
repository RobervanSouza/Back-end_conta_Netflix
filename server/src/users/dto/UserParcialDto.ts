import { PartialType } from '@nestjs/mapped-types';
import { UsuarioDto } from './userdto';

export class UserPartialDto extends PartialType(UsuarioDto) {
  id: string;
  role?: string;
}
