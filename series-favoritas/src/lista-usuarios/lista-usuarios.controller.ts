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
import { ApiTags } from '@nestjs/swagger';

@Injectable()
@Controller()
@ApiTags('Lista usuarios do perfil')
export class ListaUsuariosController {
  constructor(private readonly listaUsuariosService: ListaUsuariosService) {}

  @Post('Cria perfil')
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

  @Get('Todos os perfil criado')
  findAll() {
    return this.listaUsuariosService.findAll();
  }

  @Get('Buscar um perfil')
  findOne(@Param('id') id: string) {
    return this.listaUsuariosService.findOne(id);
  }

  @Patch('Editar um perfil')
  update(@Body() updateListaUsuarioDto: UpdateListaUsuarioDto) {
    return this.listaUsuariosService.update(updateListaUsuarioDto);
  }
}
