import { TestBed } from '@angular/core/testing';

import { BlockerInterceptor } from './blocker.interceptor';

describe('BlockerInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockerInterceptor = TestBed.get(BlockerInterceptor);
    expect(service).toBeTruthy();
  });
});
