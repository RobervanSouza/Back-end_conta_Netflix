import { ListaUsuario } from 'src/lista-usuarios/entities/lista-usuario.entity';
import { Iusuarios } from 'src/users/UsuariosInterface/usuarios';
import { CreateContaDto } from '../dto/create-conta.dto';

export class Conta extends CreateContaDto {
  id: string;
  usuarios: Iusuarios[];
  admin: Iusuarios[];
  listaUsuario: ListaUsuario[];
}
