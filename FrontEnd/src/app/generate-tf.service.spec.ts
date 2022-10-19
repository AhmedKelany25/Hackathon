import { TestBed } from '@angular/core/testing';

import { GenerateTfService } from './generate-tf.service';

describe('GenerateTfService', () => {
  let service: GenerateTfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateTfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
