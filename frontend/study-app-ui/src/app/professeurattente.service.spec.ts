import { TestBed } from '@angular/core/testing';

import { ProfesseurattenteService } from './professeurattente.service';

describe('ProfesseurattenteService', () => {
  let service: ProfesseurattenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesseurattenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
