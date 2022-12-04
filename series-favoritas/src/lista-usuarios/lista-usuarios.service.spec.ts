import { Test, TestingModule } from '@nestjs/testing';
import { ListaUsuariosService } from './lista-usuarios.service';

describe('ListaUsuariosService', () => {
  let service: ListaUsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaUsuariosService],
    }).compile();

    service = module.get<ListaUsuariosService>(ListaUsuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
