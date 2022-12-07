import { PrismaService } from 'src/prisma/service&database/prisma.service';
import { UpdateListaUsuarioDto } from './dto/update-lista-usuario.dto';
import { ListaUsuario } from './entities/lista-usuario.entity';

export class ListaUsuariosRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async createListaUsuario({
    id,
    contaId,
    usuarios,
    dataCriacaoDoPerfil,
    startPerfil,
    endPerfil,
  }: ListaUsuario): Promise<ListaUsuario> {
    return await this.prismaService.listaUsuario.create({
      data: {
        dataCriacaoDoPerfil: dataCriacaoDoPerfil,
        contaId: contaId,
        startPerfil: startPerfil,
        endPerfil: endPerfil,
        id: id,
      },
      include: {
        usuarios: true,
      },
    });
  }
  async updateListaUsuario({
    id,
    usuariosId,
  }: UpdateListaUsuarioDto): Promise<ListaUsuario> {
    return await this.prismaService.listaUsuario.update({
      where: { id: id },
      data: {
        usuarios: {
          connect: usuariosId.map((id) => {
            return { id: id };
          }),
        },
      },
      include: {
        usuarios: true,
      },
    });
  }
  async todosUsuarios(): Promise<ListaUsuario[]> {
    return await this.prismaService.listaUsuario.findMany({
      include: { usuarios: true },
    });
  }
  async IdListaUsuarios(id: string): Promise<ListaUsuario> {
    return await this.prismaService.listaUsuario.findUniqueOrThrow({
      where: { id: id },
      include: {
        usuarios: true,
      },
    });
  }
}
