import { Module } from '@nestjs/common';
import { UsuariosController } from './Users/controller/user.controller';
import { UserService } from './Users/services/user.service';

@Module({
  controllers: [UsuariosController],
  providers: [UserService],
})
export class AppModule {}
