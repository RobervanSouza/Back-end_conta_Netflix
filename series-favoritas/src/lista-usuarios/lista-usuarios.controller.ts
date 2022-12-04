import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListaUsuariosService } from './lista-usuarios.service';
import { CreateListaUsuarioDto } from './dto/create-lista-usuario.dto';
import { UpdateListaUsuarioDto } from './dto/update-lista-usuario.dto';

@Controller('lista-usuarios')
export class ListaUsuariosController {
  constructor(private readonly listaUsuariosService: ListaUsuariosService) {}

  @Post()
  create(@Body() createListaUsuarioDto: CreateListaUsuarioDto) {
    return this.listaUsuariosService.create(createListaUsuarioDto);
  }

  @Get()
  findAll() {
    return this.listaUsuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaUsuariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListaUsuarioDto: UpdateListaUsuarioDto) {
    return this.listaUsuariosService.update(+id, updateListaUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaUsuariosService.remove(+id);
  }
}
