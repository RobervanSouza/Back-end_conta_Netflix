import { Injectable } from '@nestjs/common';
import { CreateListaUsuarioDto } from './dto/create-lista-usuario.dto';
import { UpdateListaUsuarioDto } from './dto/update-lista-usuario.dto';

@Injectable()
export class ListaUsuariosService {
  create(createListaUsuarioDto: CreateListaUsuarioDto) {
    return 'This action adds a new listaUsuario';
  }

  findAll() {
    return `This action returns all listaUsuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listaUsuario`;
  }

  update(id: number, updateListaUsuarioDto: UpdateListaUsuarioDto) {
    return `This action updates a #${id} listaUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} listaUsuario`;
  }
}
