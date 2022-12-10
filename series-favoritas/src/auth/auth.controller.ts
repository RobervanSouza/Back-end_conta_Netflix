import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Request } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { userLoginDto } from './dto/user.login.input.dto';

@Controller('Authorization')
@ApiTags('Authorization')
export class AuthorizationController {
  constructor(private readonly authService: AuthService) {}

  @Post('Login')
  async login(@Body() data: userLoginDto) {
    return await this.authService.validateUser(data);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async getUser(@Request() req) {
    console.log(req);
  }
}
