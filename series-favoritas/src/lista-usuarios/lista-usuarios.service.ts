import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ContaService } from 'src/conta/conta.service';
import { CreateListaUsuarioDto } from './dto/create-lista-usuario.dto';
import { UpdateListaUsuarioDto } from './dto/update-lista-usuario.dto';
import { ListaUsuario } from './entities/lista-usuario.entity';
// teteet
//eger
//adasdasd
@Injectable()
export class ListaUsuariosService {
  private _listaUsuarios: ListaUsuario[] = [];
  constructor(private readonly contaService: ContaService) {}
  async create(
    createListaUsuarioDto: CreateListaUsuarioDto,
  ): Promise<ListaUsuario> {
    await this.contaService.findOne(createListaUsuarioDto.contaId);
    const formatarData = new Date(Date.now()).toISOString().slice(0, 10);
    const endPerfil = 1 * 60 * 1000;
    const dataCriacaoDoPerfil = new ListaUsuario();
    (dataCriacaoDoPerfil.id = randomUUID()),
      (dataCriacaoDoPerfil.startPerfil = new Date(Date.now())),
      (dataCriacaoDoPerfil.endPerfil = new Date(Date.now() + endPerfil)),
      (dataCriacaoDoPerfil.usuarios = []),
      (dataCriacaoDoPerfil.dataCriacaoDoPerfil = formatarData);
    this._listaUsuarios.push(dataCriacaoDoPerfil);
    return Promise.resolve(dataCriacaoDoPerfil);
  }

  async findAll() {
    return `This action returns all listaUsuarios`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} listaUsuario`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateListaUsuarioDto: UpdateListaUsuarioDto) {
    return `This action updates a #${id} listaUsuario`;
  }

  async remove(id: number) {
    return `This action removes a #${id} listaUsuario`;
  }
}
