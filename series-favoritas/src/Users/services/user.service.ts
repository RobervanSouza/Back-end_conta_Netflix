import { Iusuarios } from '../UsuariosInterface/usuarios';
import { UsuarioDto } from '../dto/userdto';
import { randomUUID } from 'node:crypto';
import { UserPartialDto } from '../dto/UserParcialDto';
import { UsuarioRepository } from 'src/repository/usuario.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UsuarioRepository) {}
  async createUsuario(user: UsuarioDto): Promise<Iusuarios> {
    const usuariosInterface = { ...user, id: randomUUID() };
    if (user.password.length <= 7) {
      throw new Error('Sua senha tem que ter mais de 7 Digitos ');
    }
    const usuarioCriado = await this.userRepository.createUsuario(
      usuariosInterface,
    );
    return usuarioCriado;
  }

  async updateUsuario(userData: UserPartialDto): Promise<Iusuarios> {
    const updateUsuario = await this.userRepository.updateUsuario(userData);
    return updateUsuario;
  }
  async todosUsuarios(): Promise<Iusuarios[]> {
    return this.userRepository.todosUsuarios();
  }
  async deleteUserById(userId: string): Promise<boolean> {
    try {
      const existerUsuario = this.userRepository.deleteUsuario(userId);
      if (existerUsuario) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async UsuarioById(userId: string): Promise<Iusuarios> {
    const existeUsuario = await this.userRepository.findUsuarioById(userId);
    return existeUsuario;
  }
}

/*
async findUserById(id: string): Promise<IUserEntity> {
    const foundUser = await this.prisma.user.findUniqueOrThrow({
      where: { id: id },
    });

    return foundUser;
  }
  
  async getUserById(userId: string): Promise<IUserEntity> {
    const foundUser = await this.userRepository.findUserById(userId);
    return foundUser;
  }
*/
