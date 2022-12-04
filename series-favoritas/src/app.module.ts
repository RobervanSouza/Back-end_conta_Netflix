import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/prisma/service&database/database.module';
import { UsuarioRepository } from './repository/usuario.repository';
import { UsuariosController } from './Users/controller/user.controller';
import { UserService } from './Users/services/user.service';
import { SeriesFavoritasModule } from './series-favoritas/series-favoritas.module';
import { ContaModule } from './conta/conta.module';
import { ListaUsuariosModule } from './lista-usuarios/lista-usuarios.module';

@Module({
  imports: [DataBaseModule, SeriesFavoritasModule, ContaModule, ListaUsuariosModule],
  controllers: [UsuariosController],
  providers: [UserService, UsuarioRepository],
})
export class AppModule {}
