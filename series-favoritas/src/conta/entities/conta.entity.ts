import { CreateListaUsuarioDto } from 'src/Lista-usuarios/dto/create-lista-usuario.dto';
import { Iusuarios } from 'src/Users/UsuariosInterface/usuarios';
import { CreateContaDto } from '../dto/create-conta.dto';

export class Conta extends CreateContaDto {
  id: string;
  usuarios: Iusuarios[];
  admin: Iusuarios[];
  listaUsuarios: CreateListaUsuarioDto[];
}
