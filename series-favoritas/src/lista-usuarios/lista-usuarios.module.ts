import { Module } from '@nestjs/common';
import { ListaUsuariosService } from './lista-usuarios.service';
import { ListaUsuariosController } from './lista-usuarios.controller';

@Module({
  controllers: [ListaUsuariosController],
  providers: [ListaUsuariosService]
})
export class ListaUsuariosModule {}
