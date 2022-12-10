import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/prisma/service&database/database.module';

import { ContaModule } from './conta/conta.module';
import { ListaUsuariosModule } from './Lista-usuarios/lista-usuarios.module';
import { UserModule } from './Users/user.module';

@Module({
  imports: [ContaModule, ListaUsuariosModule, DataBaseModule, UserModule],
})
export class AppModule {}
