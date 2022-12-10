import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleException } from 'src/exceptions/exceptions.Erro';

import { ContaService } from './conta.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';

@Controller()
@ApiTags('Conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post('Cria-Conta')
  async create(@Body() createContaDto: CreateContaDto) {
    try {
      return this.contaService.create(createContaDto);
    } catch (erro) {
      HandleException(erro);
    }
  }

  @Get('Todos-conta')
  async findAll() {
    try {
      return this.contaService.findAll();
    } catch (err) {
      HandleException(err);
    }
  }

  @Get('Id-da-conta')
  async findOne(@Param('id') id: string) {
    try {
      return this.contaService.findOne(id);
    } catch (erro) {
      HandleException(erro);
    }
  }

  @Patch('Editar-Conta')
  async update(@Body() updateContaDto: UpdateContaDto) {
    try {
      return this.contaService.update(updateContaDto);
    } catch (erro) {
      HandleException(erro);
    }
  }

  @Delete('Deleta-Conta')
  async remove(@Param('id') id: string) {
    try {
      return await this.contaService.remove(id);
    } catch (erro) {
      HandleException(erro);
    }
  }
}
