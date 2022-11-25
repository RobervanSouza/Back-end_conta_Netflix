import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { Iusuarios } from '../UsuariosInterface/usuarios';

import { Controller } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UsuarioDto } from '../services/dto/userdto';
import { UserPartialDto } from '../services/dto/UserParcialDto';

@Controller()
export class UsuariosController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getAllUsuarios(): Promise<Iusuarios[]> {
    return await this.service.getAllUsuarios();
  }
  @Post()
  async createUsuario(
    @Body() { cpf, email, password, name, role }: UsuarioDto,
  ): Promise<Iusuarios> {
    try {
      return await this.service.createUsuario({
        cpf,
        email,
        password,
        name,
        role,
      });
    } catch (erro) {
      console.log(erro);
    }
  }
  @Patch()
  async updateUser(@Body() userdata: UserPartialDto): Promise<Iusuarios> {
    try {
      return await this.service.updateUser(userdata);
    } catch (erro) {
      console.log(erro);
    }
  }
  @Delete(':id')
  async removeUsuarioById(@Param('id') userId: string): Promise<string> {
    try {
      const userIsDeleted = await this.service.deleteUserById(userId);
      if (userIsDeleted) {
        return 'User deleted successfully';
      } else {
        return 'User not found';
      }
    } catch (err) {
      console.log(err);
    }
  }
}
