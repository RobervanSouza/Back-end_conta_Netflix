import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HandleException } from 'src/exceptions/exceptions.Erro';

import { ContaService } from './conta.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';

@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post()
  async create(@Body() createContaDto: CreateContaDto) {
    try {
      return this.contaService.create(createContaDto);
    } catch (erro) {
      HandleException(erro);
    }
  }

  @Get()
  async findAll() {
    try {
      return this.contaService.findAll();
    } catch (err) {
      HandleException(err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.contaService.findOne(id);
    } catch (erro) {
      HandleException(erro);
    }
  }

  @Patch()
  async update(@Body() updateContaDto: UpdateContaDto) {
    try {
      return this.contaService.update(updateContaDto);
    } catch (erro) {
      HandleException(erro);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.contaService.remove(id);
    } catch (erro) {
      HandleException(erro);
    }
  }
}
