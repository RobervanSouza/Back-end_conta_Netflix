import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Injectable,
} from '@nestjs/common';
import { ListaUsuariosService } from './lista-usuarios.service';
import { CreateListaUsuarioDto } from './dto/create-lista-usuario.dto';
import { UpdateListaUsuarioDto } from './dto/update-lista-usuario.dto';
import { RegistrarPerfilDto } from './dto/rigistrar-novo-perfil';
import { HandleException } from 'src/exceptions/exceptions.Erro';

@Injectable()
@Controller('lista-usuarios')
export class ListaUsuariosController {
  constructor(private readonly listaUsuariosService: ListaUsuariosService) {}

  @Post()
  create(@Body() createListaUsuarioDto: CreateListaUsuarioDto) {
    return this.listaUsuariosService.create(createListaUsuarioDto);
  }

  @Post('RegistarPerfil')
  async registrarPerfil(
    @Body() { listaUsuarioId, userId }: RegistrarPerfilDto,
  ) {
    try {
      return await this.listaUsuariosService.RegistrarPerfil(
        listaUsuarioId,
        userId,
      );
    } catch (error) {
      HandleException(error);
    }
  }

  @Get()
  findAll() {
    return this.listaUsuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaUsuariosService.findOne(id);
  }

  @Patch(':id')
  update(@Body() updateListaUsuarioDto: UpdateListaUsuarioDto) {
    return this.listaUsuariosService.update(updateListaUsuarioDto);
  }
}
