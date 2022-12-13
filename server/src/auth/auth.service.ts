/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Exception } from 'src/exceptions/exception';
import { Exceptions } from 'src/exceptions/exceptions.Erro';
import { UserService } from 'src/users/services/user.service';
import { Iusuarios } from 'src/users/UsuariosInterface/usuarios';
import { userLoginDto } from './dto/user.login.input.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser({ email, password }: userLoginDto) {
    const user = await this.userService.findUserByEmail(email);
    const validatePassword = await compare(password, user.password);
    if (!validatePassword) {
      throw new Exception(Exceptions.UnauthorizedException, 'Senha invalida');
    }
    delete user.password;
    return {
      token: this.jwtService.sign({
        email: user.email,
        id: user.id,
        name: user.name,
        role: user.role,
      }),
      user,
    };
  }
  async getUser(email: string): Promise<Iusuarios> {
    const user = await this.userService.findUserByEmail(email);
    return user;
  }
}
