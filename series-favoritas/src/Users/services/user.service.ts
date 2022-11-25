import { Iusuarios } from '../UsuariosInterface/usuarios';
import { UsuarioDto } from './dto/userdto';
import { randomUUID } from 'node:crypto';
import { UserPartialDto } from './dto/UserParcialDto';
export class UserService {
  private users: Iusuarios[] = [];
  async createUsuario(user: UsuarioDto): Promise<Iusuarios> {
    const usuariosInterface = { ...user, id: randomUUID() };
    this.users.push(usuariosInterface);
    return usuariosInterface;
  }

  async updateUser(userData: UserPartialDto): Promise<Iusuarios> {
    this.users.map((user, index) => {
      if (user.id === userData.id) {
        const UpdateUser = Object.assign(user, userData);
        this.users.splice(index, 1, UpdateUser);
      }
    });
    const updateUser = this.users.find((user) => user.id === userData.id);
    return updateUser;
  }
  async getAllUsuarios(): Promise<Iusuarios[]> {
    return this.users;
  }
  async deleteUserById(userId: string): Promise<boolean> {
    const existUser = this.users.find((user) => user.id === userId);
    if (!existUser) {
      return false;
    }
    this.users.map((user, index) => {
      if (user.id === userId) {
        this.users.splice(index, 1);
      }
    });
    return true;
  }
  async getUsuarioById(userId: string): Promise<Iusuarios> {
    const existeUsuario = this.users.find((user) => user.id === userId);
    if (!existeUsuario) {
      throw new Error('User not found');
    }
    return existeUsuario;
  }
}
