import { Iusuarios } from '../UsuariosInterface/usuarios';
import { UsuarioDto } from '../dto/userdto';
import { randomUUID } from 'node:crypto';
import { UserPartialDto } from '../dto/UserParcialDto';
import { UsuarioRepository } from 'src/Users/repository/usuario.repository';
import { Injectable } from '@nestjs/common';
import { Exception } from 'src/exceptions/exception';
import { Exceptions } from 'src/exceptions/exceptions.Erro';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UsuarioRepository) {}
  async createUsuario(user: UsuarioDto): Promise<Iusuarios> {
    const usuariosInterface: Iusuarios = {
      ...user,
      id: randomUUID(),
      role: 'user',
    };
    if (user.password.length <= 7) {
      throw new Exception(
        Exceptions.InvaliData,
        'Sua senha tem que ter mais de 6 caracteres ',
      );
    }
    const hashPassword = await hash(user.password, 10);
    usuariosInterface.password = hashPassword;

    const usuarioCriado = await this.userRepository.createUsuario(
      usuariosInterface,
    );
    delete usuarioCriado.password;
    return usuarioCriado;
  }

  async updateUsuario(userData: UserPartialDto): Promise<Iusuarios> {
    const updateUsuario = await this.userRepository.updateUsuario(userData);
    delete updateUsuario.password;
    return updateUsuario;
  }
  async todosUsuarios(): Promise<Iusuarios[]> {
    return this.userRepository.todosUsuarios();
  }
  async deleteUserById(userId: string): Promise<boolean> {
    try {
      const existerUsuario = await this.userRepository.deleteUsuario(userId);
      if (existerUsuario) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Exception(Exceptions.InvaliData, 'Verfique i Id '); //! refatorar
      return false;
    }
  }
  async UsuarioById(userId: string): Promise<Iusuarios> {
    const existeUsuario = await this.userRepository.findUsuarioById(userId);
    delete existeUsuario.password;
    return existeUsuario;
  }
  async findUserByEmail(email: string): Promise<Iusuarios> {
    const user = await this.userRepository.findUserByEmail(email);
    return user;
  }
}
