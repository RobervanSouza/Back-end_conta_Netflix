import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/prisma/service&database/database.module';
import { UsuariosController } from './controller/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [DataBaseModule],
  controllers: [UsuariosController],
  providers: [UserService, UsuariosController],
})
export class UserModule {}
