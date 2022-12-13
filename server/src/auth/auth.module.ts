import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { DataBaseModule } from 'src/prisma/service&database/database.module';
import { UsuarioRepository } from 'src/users/repository/usuario.repository';
import { UserService } from 'src/users/services/user.service';
import { AuthorizationController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthStrategy } from './auth.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '24h' },
    }),
    ConfigModule.forRoot(),
    DataBaseModule,
  ],
  controllers: [AuthorizationController],
  providers: [AuthService, UserService, UsuarioRepository, AuthStrategy],
  exports: [AuthStrategy, AuthService],
})
export class AuthModule {}
