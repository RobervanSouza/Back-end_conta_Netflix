import { Module } from '@nestjs/common';
import { ContaService } from './conta.service';
import { ContaController } from './conta.controller';
import { ContaRepository } from './conta.repository';
import { DataBaseModule } from 'src/prisma/service&database/database.module';

@Module({
  imports: [DataBaseModule],
  controllers: [ContaController],
  providers: [ContaService, ContaRepository],
})
export class ContaModule {}
