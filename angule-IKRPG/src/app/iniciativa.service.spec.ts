import { TestBed, inject } from '@angular/core/testing';

import { IniciativaService } from './iniciativa.service';

describe('IniciativaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IniciativaService]
    });
  });

  it('should be created', inject([IniciativaService], (service: IniciativaService) => {
    expect(service).toBeTruthy();
  }));
});
