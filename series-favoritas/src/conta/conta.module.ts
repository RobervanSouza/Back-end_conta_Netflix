import { Module } from '@nestjs/common';
import { ContaService } from './conta.service';
import { ContaController } from './conta.controller';
import { ContaRepository } from './conta.repository';
import { DataBaseModule } from 'src/prisma/service&database/database.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    DataBaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ContaController],
  providers: [ContaService, ContaRepository],
})
export class ContaModule {}
