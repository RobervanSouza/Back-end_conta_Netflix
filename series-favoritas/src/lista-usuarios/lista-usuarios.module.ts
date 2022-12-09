import { Module } from '@nestjs/common';
import { ListaUsuariosService } from './lista-usuarios.service';
import { ListaUsuariosController } from './lista-usuarios.controller';
import { ContaService } from 'src/conta/conta.service';
import { DataBaseModule } from 'src/prisma/service&database/database.module';
import { ListaUsuariosRepository } from './lista-usuarios.repository';
import { ContaRepository } from 'src/conta/conta.repository';
import { UserService } from 'src/Users/services/user.service';
import { UsuarioRepository } from 'src/Users/repository/usuario.repository';

@Module({
  imports: [DataBaseModule],
  controllers: [ListaUsuariosController],
  providers: [
    ListaUsuariosService,
    ListaUsuariosRepository,
    ContaService,
    ContaRepository,
    UserService,
    UsuarioRepository,
  ],
})
export class ListaUsuariosModule {}
