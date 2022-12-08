import { Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'src/prisma/service&database/prisma.service';
import { CreateContaDto } from './dto/create-conta.dto';

import { UpdateContaDto } from './dto/update-conta.dto';
import { Conta } from './entities/conta.entity';

@Injectable()
export class ContaRepository {
  private dataRetorno = {
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
    return await this.prismaService.conta.create({
      data: {
        id: id,
        series: series,
        filmes: filmes,
        documentarios: documentarios,
        desenhos: desenhos,
        shows: shows,
      },
      include: this.dataRetorno,
    });
  }
  async updateConta(updatedata: UpdateContaDto): Promise<Conta> {
    return await this.prismaService.conta.update({
      where: { id: updatedata.id },
      data: {
        ...updatedata,
        usuarios: {
          connect: updatedata.usuariosIds?.map((id) => ({ id: id })),
        },
        admin: {
          connect: updatedata.adminIds?.map((id) => ({ id: id })),
        },
      },
      include: this.dataRetorno,
    });
  }
  async deleteConta(id: string): Promise<Conta> {
    return await this.prismaService.conta.delete({
      where: { id: id },
      include: this.dataRetorno,
    });
  }
  async findContaId(id: string): Promise<Conta> {
    return await this.prismaService.conta.findUnique({
      where: { id: id },
      include: this.dataRetorno,
    });
  }
  async findAllConta(): Promise<Conta[]> {
    return await this.prismaService.conta.findMany({
      include: this.dataRetorno,
    });
  }
}
