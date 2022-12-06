import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { Conta } from './entities/conta.entity';

@Injectable()
export class ContaService {
  private _listaConta: Conta[] = [];
  async create(createContaDto: CreateContaDto): Promise<Conta> {
    const createConta: Conta = {
      ...createContaDto,
      id: randomUUID(),
      usuarios: [],
      admin: [],
      listaUsuarios: [],
    };
    this._listaConta.push(createConta);
    return createConta;
  }

  async findAll(): Promise<Conta[]> {
    return this._listaConta;
  }

  async findOne(id: string): Promise<Conta> {
    return this._listaConta.find((conta) => conta.id == id);
  }

  async update(id: string, updateContaDto: UpdateContaDto): Promise<Conta> {
    this._listaConta.map((conta, index) => {
      if (conta.id == id) {
        const updateConta = Object.assign(conta, updateContaDto);
        this._listaConta.splice(index, 1, updateConta);
      }
    });

    return this.findOne(id);
  }

  async remove(id: string): Promise<string> {
    await this._listaConta.map((conta, index) => {
      if (conta.id == id) {
        this._listaConta.splice(index, 1);
      }
    });
    return Promise.resolve('deletado com sucesso!!');
  }
}
