import { Injectable } from '@nestjs/common';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';

@Injectable()
export class ContaService {
  
  async create(createContaDto: CreateContaDto) {
    return 'This action adds a new conta';
  }

  async findAll() {
    return `This action returns all conta`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} conta`;
  }


  async update(id: number, updateContaDto: UpdateContaDto) {
    return `This action updates a #${id} conta`;
  }

  async remove(id: number) {
    return `This action removes a #${id} conta`;
  }
}
