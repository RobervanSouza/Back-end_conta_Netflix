import { Iusuarios } from 'src/Users/UsuariosInterface/usuarios';

export class CreateListaUsuarioDto {
  IdConta: string;
  usuarios: Iusuarios[];
  dataCriacaoDoPerfil: Date;
  startDate: Date;
  endDate: Date;
}
