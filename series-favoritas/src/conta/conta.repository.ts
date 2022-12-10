import { Injectable } from '@nestjs/common/decorators';
import { Exception } from 'src/exceptions/exception';
import { Exceptions } from 'src/exceptions/exceptions.Erro';
import { PrismaService } from 'src/prisma/service&database/prisma.service';

import { CreateContaDto } from './dto/create-conta.dto';

import { UpdateContaDto } from './dto/update-conta.dto';
import { Conta } from './entities/conta.entity';

@Injectable()
export class ContaRepository {
  private includesLista = {
    usuarios: true,
    admin: true,
    listaUsuario: {
      include: {
        usuarios: true,
      },
    },
  };

  constructor(private readonly prismaService: PrismaService) {}

  async createConta(
    { series, filmes, documentarios, desenhos, shows }: CreateContaDto,
    id: string,
  ): Promise<Conta> {
    try {
      return await this.prismaService.conta.create({
        data: {
          id: id,
          series: series,
          filmes: filmes,
          documentarios: documentarios,
          desenhos: desenhos,
          shows: shows,
        },
        include: this.includesLista,
      });
    } catch (erro) {
      throw new Exception(Exceptions.DataBaseException, erro.message);
    }
  }
  async updateConta(updatedata: UpdateContaDto): Promise<Conta> {
    const usuariosIds = updatedata.usuariosIds;
    const adminIds = updatedata.adminIds;

    delete updatedata.usuariosIds;
    delete updatedata.adminIds;
    return await this.prismaService.conta.update({
      where: { id: updatedata.id },
      data: {
        ...updatedata,
        usuarios: {
          connect: usuariosIds?.map((id) => ({ id: id })),
        },
        admin: {
          connect: adminIds?.map((id) => ({ id: id })),
        },
      },
      include: this.includesLista,
    });
  }
  async deleteConta(id: string): Promise<Conta> {
    try {
      return await this.prismaService.conta.delete({
        where: { id: id },
        include: this.includesLista,
      });
    } catch (erro) {
      throw new Exception(Exceptions.DataBaseException, erro.message);
    }
  }
  async findContaId(id: string): Promise<Conta> {
    try {
      return await this.prismaService.conta.findUnique({
        where: { id: id },
        include: this.includesLista,
      });
    } catch (erro) {
      throw new Exception(Exceptions.DataBaseException, erro.message);
    }
  }
  async findAllConta(): Promise<Conta[]> {
    try {
      return await this.prismaService.conta.findMany({
        include: this.includesLista,
      });
    } catch (erro) {
      throw new Exception(Exceptions.DataBaseException, erro.message);
    }
  }
}
