import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { DataBaseModule } from 'src/prisma/service&database/database.module';
import { UsuariosController } from './controller/user.controller';
import { UsuarioRepository } from './repository/usuario.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [
    DataBaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [UsuariosController],
  providers: [UserService, UsuarioRepository],
})
export class UserModule {}
