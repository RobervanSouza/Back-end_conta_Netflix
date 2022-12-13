import { Injectable } from '@nestjs/common';
import { Exception } from 'src/exceptions/exception';
import { Exceptions } from 'src/exceptions/exceptions.Erro';
import { PrismaService } from 'src/prisma/service&database/prisma.service';

import { UserPartialDto } from 'src/users/dto/UserParcialDto';
import { Iusuarios } from 'src/users/UsuariosInterface/usuarios';
@Injectable()
export class UsuarioRepository {
  constructor(private readonly prisma: PrismaService) {}
  async createUsuario(user: Iusuarios): Promise<Iusuarios> {
    try {
      const createUsuario = await this.prisma.user.create({ data: user });
      return createUsuario;
    } catch (erro) {
      throw new Exception(
        Exceptions.DataBaseException,
        'Erro ao cadastrar o usuario, CPf ou Email ja cadastrado',
      );
    }
  }
  async updateUsuario(user: UserPartialDto): Promise<Iusuarios> {
    try {
      const updateUsuario = await this.prisma.user.update({
        where: { id: user.id },
        data: user,
      });
      return updateUsuario;
    } catch (erro) {
      throw new Exception(
        Exceptions.DataBaseException,
        'verifique o Id do usuario',
      );
    }
  }
  async deleteUsuario(id: string): Promise<Iusuarios> {
    try {
      const deleteUsuario = await this.prisma.user.delete({
        where: { id: id },
      });
      return deleteUsuario;
    } catch (erro) {
      throw new Exception(
        Exceptions.DataBaseException,
        'User not found in database',
      );
    }
  }
  async todosUsuarios(): Promise<Iusuarios[]> {
    try {
      const todosUsuarios = await this.prisma.user.findMany();
      return todosUsuarios;
    } catch (erro) {
      throw new Exception(
        Exceptions.DataBaseException,
        'Nenhum usuario cadastrado',
      );
    }
  }
  async findUsuarioById(id: string): Promise<Iusuarios> {
    try {
      const idUsuario = await this.prisma.user.findUniqueOrThrow({
        where: { id: id },
      });
      return idUsuario;
    } catch (erro) {
      throw new Exception(
        Exceptions.DataBaseException,
        'verifique o ID do usuario',
      );
    }
  }
  async findUserByEmail(email: string): Promise<Iusuarios> {
    try {
      const userEmail = await this.prisma.user.findUniqueOrThrow({
        where: { email: email },
      });
      return userEmail;
    } catch (erro) {
      throw new Exception(Exceptions.DataBaseException, 'Email não cadastrado');
    }
  }
}
