import { Iusuarios } from 'src/Users/UsuariosInterface/usuarios';

export class CreateContaDto {
  series: string;
  filmes: string;
  documentarios: string;
  desenhos: string;
  shows: string;
  usuarios: Iusuarios[];
  admin: Iusuarios[];
  listaUsuarios: string;
}
