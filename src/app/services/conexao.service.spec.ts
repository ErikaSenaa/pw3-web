import { Conexao } from './../models/conexao';
import { TestBed } from '@angular/core/testing';

import { ConexaoService } from './conexao.service';

describe('DisciplinaService', () => {
  let service: ConexaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
