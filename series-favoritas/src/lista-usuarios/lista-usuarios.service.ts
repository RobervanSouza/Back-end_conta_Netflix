import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ContaService } from 'src/conta/conta.service';
import { Exception } from 'src/exceptions/exception';
import { Exceptions } from 'src/exceptions/exceptions.Erro';
import { UserService } from 'src/Users/services/user.service';
import { CreateListaUsuarioDto } from './dto/create-lista-usuario.dto';
import { UpdateListaUsuarioDto } from './dto/update-lista-usuario.dto';
import { ListaUsuario } from './entities/lista-usuario.entity';
import { ListaUsuariosRepository } from './lista-usuarios.repository';

@Injectable()
export class ListaUsuariosService {
  constructor(
    private readonly contaService: ContaService,
    private readonly userService: UserService,
    private readonly listaUsuariosRepository: ListaUsuariosRepository,
  ) {}
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
    return await this.listaUsuariosRepository.createListaUsuario(
      dataCriacaoDoPerfil,
    );
  }
  async findAll() {
    return await this.listaUsuariosRepository.todosUsuarios();
  }

  async findOne(id: string): Promise<ListaUsuario> {
    const findListaUsuarios =
      await this.listaUsuariosRepository.IdListaUsuarios(id);
    return findListaUsuarios;
  }

  async update(updateListaUsuarioDto: UpdateListaUsuarioDto) {
    return await this.listaUsuariosRepository.updateListaUsuario(
      updateListaUsuarioDto,
    );
  }
  async RegistrarPerfil(
    listaUsuarioId: string,
    userId: string,
  ): Promise<ListaUsuario> {
    const findListaUsuarios = await this.findOne(listaUsuarioId);

    const existeConta = await this.contaService.findOne(
      findListaUsuarios.contaId,
    );
    const dataAtual = new Date(Date.now());
    if (dataAtual.getTime() > findListaUsuarios.endPerfil.getTime()) {
      throw new Exception(Exceptions.InvaliData, 'error ao criar');
    }
    const usuarios = new Map<string, any>();
    for (const usuario of existeConta.usuarios) {
      usuarios.set(usuario.id, { ...usuario });
    }

    if (!usuarios.get(userId) === undefined) {
      throw new Exception(
        Exceptions.InvaliData,
        'Não existe estudande na sala',
      );
    }
    return this.listaUsuariosRepository.updateListaUsuario({
      id: listaUsuarioId,
      usuariosId: [userId],
    });
  }
}
