import { Test, TestingModule } from '@nestjs/testing';
import { ListaUsuariosController } from './lista-usuarios.controller';
import { ListaUsuariosService } from './lista-usuarios.service';

describe('ListaUsuariosController', () => {
  let controller: ListaUsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaUsuariosController],
      providers: [ListaUsuariosService],
    }).compile();

    controller = module.get<ListaUsuariosController>(ListaUsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
