import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ContaService } from 'src/conta/conta.service';
import { Exception } from 'src/exceptions/exception';
import { Exceptions } from 'src/exceptions/exceptions.Erro';
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
    const dataCriacaoDoPerfil: ListaUsuario = {
      ...createListaUsuarioDto,
      id: randomUUID(),
      startPerfil: new Date(Date.now()),
      endPerfil: new Date(Date.now() + endPerfil),
      usuarios: [],
      dataCriacaoDoPerfil: formatarData,
    };
    this._listaUsuarios.push(dataCriacaoDoPerfil);
    return Promise.resolve(dataCriacaoDoPerfil);
  }
  async findAll() {
    return this._listaUsuarios;
  }

  async findOne(id: string): Promise<ListaUsuario> {
    const findListaUsuarios = await this._listaUsuarios.find(
      (listaUsuario) => listaUsuario.id == id,
    );
    return findListaUsuarios;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateListaUsuarioDto: UpdateListaUsuarioDto) {
    return `This action updates a #${id} listaUsuario`;
  }
  async RegistrarPerfil(listaUsuario: string, userId: string): Promise<string> {
    const findListaUsuarios = await this.findOne(listaUsuario);
    const dataAtual = new Date(Date.now());
    if (dataAtual.getTime() > findListaUsuarios.endPerfil.getTime()) {
      throw new Exception(Exceptions.InvaliData, 'error ao criar');
    }
    return 'lista concluida';
  }

  async remove(id: number) {
    return `This action removes a #${id} listaUsuario`;
  }
}
