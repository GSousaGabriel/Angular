import { TestBed } from '@angular/core/testing';

import { HttpContentService } from './http-content.service';

describe('HttpContentService', () => {
  let service: HttpContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
