import { ApiProperty } from '@nestjs/swagger';
import { CreateListaUsuarioDto } from 'src/lista-usuarios/dto/create-lista-usuario.dto';
import { Iusuarios } from 'src/Users/UsuariosInterface/usuarios';

export class CreateContaDto {
  @ApiProperty()
  series: string;
  filmes: string;
  documentarios: string;
  desenhos: string;
  shows: string;
  usuarios: Iusuarios[];
  admin: Iusuarios[];
  listaUsuarios: CreateListaUsuarioDto[];
}
