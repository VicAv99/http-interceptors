import { TestBed } from '@angular/core/testing';

import { BlockerInterceptorService } from './blocker-interceptor.service';

describe('BlockerInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockerInterceptorService = TestBed.get(BlockerInterceptorService);
    expect(service).toBeTruthy();
  });
});
