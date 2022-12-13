import { Module } from '@nestjs/common';
import { ListaUsuariosService } from './lista-usuarios.service';
import { ListaUsuariosController } from './lista-usuarios.controller';
import { ContaService } from 'src/conta/conta.service';
import { DataBaseModule } from 'src/prisma/service&database/database.module';
import { ListaUsuariosRepository } from './lista-usuarios.repository';
import { ContaRepository } from 'src/conta/conta.repository';

import { UsuarioRepository } from 'src/users/repository/usuario.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    DataBaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ListaUsuariosController],
  providers: [
    ListaUsuariosService,
    ListaUsuariosRepository,
    ContaService,
    ContaRepository,

    UsuarioRepository,
  ],
})
export class ListaUsuariosModule {}
