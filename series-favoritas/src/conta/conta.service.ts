import { randomUUID } from 'crypto';
import { Exception } from 'src/exceptions/exception';
import { Exceptions } from 'src/exceptions/exceptions.Erro';
import { ContaRepository } from './conta.reposytory';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { Conta } from './entities/conta.entity';

export class ContaService {
  constructor(private readonly contaRepository: ContaRepository) {}
  async create(createContaDto: CreateContaDto): Promise<Conta> {
    const id = randomUUID();
    return await this.contaRepository.createConta(createContaDto, id);
  }

  async findAll(): Promise<Conta[]> {
    return this.contaRepository.findAllConta();
  }

  async findOne(id: string): Promise<Conta> {
    return this.contaRepository.findContaId(id);
  }

  async update(id: string, updateContaDto: UpdateContaDto): Promise<Conta> {
    if (!updateContaDto.usuariosIds && !updateContaDto.adminIds) {
      throw new Exception(Exceptions.InvaliData, 'não conectado');
    }
    return await this.contaRepository.updateConta(updateContaDto);
  }

  async remove(id: string): Promise<string> {
    await this.contaRepository.deleteConta(id);
    return 'conta deletada';
  }
}
