import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/service&database/prisma.service';

import { UserPartialDto } from 'src/Users/dto/UserParcialDto';
import { Iusuarios } from 'src/Users/UsuariosInterface/usuarios';
@Injectable()
export class UsuarioRepository {
  constructor(private readonly prisma: PrismaService) {}
  async createUsuario(user: Iusuarios): Promise<Iusuarios> {
    const createUsuario = await this.prisma.user.create({ data: user });
    return createUsuario;
  }
  async updateUsuario(user: UserPartialDto): Promise<Iusuarios> {
    const updateUsuario = await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return updateUsuario;
  }
  async deleteUsuario(id: string): Promise<Iusuarios> {
    const deleteUsuario = await this.prisma.user.delete({
      where: { id: id },
    });
    return deleteUsuario;
  }
  async todosUsuarios(): Promise<Iusuarios[]> {
    const todosUsuarios = await this.prisma.user.findMany();
    return todosUsuarios;
  }
  async findUsuarioById(id: string): Promise<Iusuarios> {
    const idUsuario = await this.prisma.user.findUniqueOrThrow({
      where: { id: id },
    });
    return idUsuario;
  }
}
/*
async findUserById(id: string): Promise<IUserEntity> {
    const foundUser = await this.prisma.user.findUniqueOrThrow({
      where: { id: id },
    });

    return foundUser;
  }
*/
