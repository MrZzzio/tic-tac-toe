import { TestBed, inject } from '@angular/core/testing';

import { QuadService } from './quad.service';

describe('QuadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuadService]
    });
  });

  it('should be created', inject([QuadService], (service: QuadService) => {
    expect(service).toBeTruthy();
  }));
});
