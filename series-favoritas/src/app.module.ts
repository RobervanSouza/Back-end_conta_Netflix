import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/prisma/service&database/database.module';
import { UsuarioRepository } from './repository/usuario.repository';
import { UsuariosController } from './Users/controller/user.controller';
import { UserService } from './Users/services/user.service';
import { SeriesFavoritasModule } from './series-favoritas/series-favoritas.module';

@Module({
  imports: [DataBaseModule, SeriesFavoritasModule],
  controllers: [UsuariosController],
  providers: [UserService, UsuarioRepository],
})
export class AppModule {}
