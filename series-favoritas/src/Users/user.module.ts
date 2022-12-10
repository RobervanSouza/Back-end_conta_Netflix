import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/prisma/service&database/database.module';
import { UsuariosController } from './controller/user.controller';
import { UsuarioRepository } from './repository/usuario.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [DataBaseModule],
  controllers: [UsuariosController],
  providers: [UserService, UsuarioRepository],
})
export class UserModule {}
