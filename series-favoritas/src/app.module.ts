import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/prisma/service&database/database.module';
import { AuthModule } from './auth/auth.module';

import { ContaModule } from './conta/conta.module';
import { ListaUsuariosModule } from './Lista-usuarios/lista-usuarios.module';

import { UserModule } from './Users/user.module';

@Module({
  imports: [
    DataBaseModule,
    AuthModule,
    UserModule,
    ContaModule,
    ListaUsuariosModule,
  ],
})
export class AppModule {}
