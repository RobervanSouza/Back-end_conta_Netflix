import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HandleException } from 'src/exceptions/exceptions.Erro';
import { Iusuarios } from 'src/users/UsuariosInterface/usuarios';

import { AuthService } from './auth.service';
import { AdminAuthorization } from './decorators/admin.decorator';
import { UserLogged } from './decorators/user-logged.decorator';
import { userLoginDto } from './dto/user.login.input.dto';

@Controller('Authorization')
@ApiTags('Authorization')
export class AuthorizationController {
  constructor(private readonly authService: AuthService) {}

  @Post('Login')
  async login(@Body() data: userLoginDto) {
    try {
      return await this.authService.validateUser(data);
    } catch (erro) {
      HandleException(erro);
    }
  }

  @Get()
  @UseGuards(AuthGuard(), AdminAuthorization)
  @ApiBearerAuth()
  async getUser(@UserLogged() user: Iusuarios) {
    return user;
  }
}
