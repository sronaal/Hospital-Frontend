import { TestBed } from '@angular/core/testing';

import { CrudPacienteService } from './crud-paciente.service';

describe('CrudPacienteService', () => {
  let service: CrudPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
