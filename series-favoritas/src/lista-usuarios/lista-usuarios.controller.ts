import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { ListaUsuariosService } from './lista-usuarios.service';
import { CreateListaUsuarioDto } from './dto/create-lista-usuario.dto';
import { UpdateListaUsuarioDto } from './dto/update-lista-usuario.dto';
import { RegistrarPerfilDto } from './dto/rigistrar-novo-perfil';
import { HandleException } from 'src/exceptions/exceptions.Erro';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AdminAuthorization } from 'src/auth/decorators/admin.decorator';
import { UserLogged } from 'src/auth/decorators/user-logged.decorator';
import { Iusuarios } from 'src/Users/UsuariosInterface/usuarios';

@Injectable()
@Controller()
@ApiTags('Lista usuarios do perfil')
export class ListaUsuariosController {
  constructor(private readonly listaUsuariosService: ListaUsuariosService) {}

  @UseGuards(AuthGuard(), AdminAuthorization)
  @ApiBearerAuth()
  @Post('Cria-perfil')
  create(@Body() createListaUsuarioDto: CreateListaUsuarioDto) {
    return this.listaUsuariosService.create(createListaUsuarioDto);
  }
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post('RegistarPerfil')
  async registrarPerfil(
    @UserLogged() userLogged: Iusuarios,
    @Body()
    { listaUsuarioId }: RegistrarPerfilDto,
  ) {
    try {
      return await this.listaUsuariosService.RegistrarPerfil(
        listaUsuarioId,
        userLogged.id,
      );
    } catch (error) {
      HandleException(error);
    }
  }
  @UseGuards(AuthGuard(), AdminAuthorization)
  @ApiBearerAuth()
  @Get('Todo-perfil')
  findAll() {
    return this.listaUsuariosService.findAll();
  }

  @UseGuards(AuthGuard(), AdminAuthorization)
  @ApiBearerAuth()
  @Get('Buscar-perfil')
  findOne(@Param('id') id: string) {
    return this.listaUsuariosService.findOne(id);
  }
  @UseGuards(AuthGuard(), AdminAuthorization)
  @ApiBearerAuth()
  @Patch('Editar-perfil')
  update(@Body() updateListaUsuarioDto: UpdateListaUsuarioDto) {
    return this.listaUsuariosService.update(updateListaUsuarioDto);
  }
}
