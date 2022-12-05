import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/prisma/service&database/database.module';
import { UsuarioRepository } from './Users/repository/usuario.repository';
import { UsuariosController } from './Users/controller/user.controller';
import { UserService } from './Users/services/user.service';

import { ContaModule } from './conta/conta.module';
import { ListaUsuariosModule } from './Lista-usuarios/lista-usuarios.module';

@Module({
  imports: [DataBaseModule, ContaModule, ListaUsuariosModule, DataBaseModule],
  controllers: [UsuariosController],
  providers: [UserService, UsuarioRepository],
})
export class AppModule {}
