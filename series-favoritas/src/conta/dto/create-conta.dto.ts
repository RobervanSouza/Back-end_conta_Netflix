import { CreateListaUsuarioDto } from 'src/lista-usuarios/dto/create-lista-usuario.dto';
import { Iusuarios } from 'src/Users/UsuariosInterface/usuarios';

export class CreateContaDto {
  series: string;
  filmes: string;
  documentarios: string;
  desenhos: string;
  shows: string;
  usuarios: Iusuarios[];
  admin: Iusuarios[];
  listaUsuarios: CreateListaUsuarioDto[];
}
