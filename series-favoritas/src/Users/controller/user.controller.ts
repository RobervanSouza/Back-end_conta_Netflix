import { Body, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';

import { Iusuarios } from '../UsuariosInterface/usuarios';

import { Controller } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UsuarioDto } from '../dto/userdto';
import { UserPartialDto } from '../dto/UserParcialDto';
import { Response } from 'express';
import { HandleException } from 'src/exceptions/exceptions.Erro';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Criar usuarios')
export class UsuariosController {
  constructor(private readonly service: UserService) {}

  @Get('Todos-usuarios')
  async getAllUsuarios(): Promise<Iusuarios[]> {
    return await this.service.todosUsuarios();
  }
  @Get('Procura-usuario-pelo:id')
  async getIdUsuario(@Param('id') usuarioId: string): Promise<Iusuarios> {
    try {
      return await this.service.UsuarioById(usuarioId);
    } catch (erro) {
      console.log(erro);
    }
  }
  @Post('Cria-usuario')
  async createUsuario(
    @Body() { cpf, email, password, name, role }: UsuarioDto,
    @Res() response: Response,
  ) {
    try {
      const result = await this.service.createUsuario({
        cpf,
        email,
        password,
        name,
        role,
      });
      response.status(201).send(result);
    } catch (erro) {
      HandleException(erro);
    }
  }
  @Patch('Edita-usuario')
  async updateUser(@Body() userdata: UserPartialDto): Promise<Iusuarios> {
    try {
      return await this.service.updateUsuario(userdata);
    } catch (erro) {
      HandleException(erro);
    }
  }
  @Delete('Deleta-usuario:id')
  async deleteUserById(@Param('id') userId: string): Promise<string> {
    try {
      const userIsDeleted = await this.service.deleteUserById(userId);
      if (userIsDeleted) {
        return 'usuario deletado com sucesso';
      } else {
        return 'usuario não encontrado';
      }
    } catch (err) {
      HandleException(err);
    }
  }
}
