import { PartialType } from '@nestjs/swagger';
import { CreateListaUsuarioDto } from './create-lista-usuario.dto';

export class UpdateListaUsuarioDto extends PartialType(CreateListaUsuarioDto) {}
