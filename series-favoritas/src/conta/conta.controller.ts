import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthorization } from 'src/auth/decorators/admin.decorator';
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
  @UseGuards(AuthGuard(), AdminAuthorization)
  @ApiBearerAuth()
  @Get('Todos-conta')
  async findAll() {
    try {
      return this.contaService.findAll();
    } catch (err) {
      HandleException(err);
    }
  }
  @UseGuards(AuthGuard(), AdminAuthorization)
  @ApiBearerAuth()
  @Get('Id-da-conta')
  async findOne(@Param('id') id: string) {
    try {
      return this.contaService.findOne(id);
    } catch (erro) {
      HandleException(erro);
    }
  }
  @UseGuards(AuthGuard(), AdminAuthorization)
  @ApiBearerAuth()
  @Patch('Editar-Conta')
  async update(@Body() updateContaDto: UpdateContaDto) {
    try {
      return this.contaService.update(updateContaDto);
    } catch (erro) {
      HandleException(erro);
    }
  }
  @UseGuards(AuthGuard(), AdminAuthorization)
  @ApiBearerAuth()
  @Delete('Deleta-Conta')
  async remove(@Param('id') id: string) {
    try {
      return await this.contaService.remove(id);
    } catch (erro) {
      HandleException(erro);
    }
  }
}
