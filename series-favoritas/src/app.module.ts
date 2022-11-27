import { Module } from '@nestjs/common';
import { DataBaseModule } from 'prisma/service&database/database.module';
import { UsuarioRepository } from './repository/usuario.repository';
import { UsuariosController } from './Users/controller/user.controller';
import { UserService } from './Users/services/user.service';

@Module({
  imports: [DataBaseModule],
  controllers: [UsuariosController],
  providers: [UserService, UsuarioRepository],
})
export class AppModule {}
