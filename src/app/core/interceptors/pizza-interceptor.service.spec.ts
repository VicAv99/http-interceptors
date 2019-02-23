import { TestBed } from '@angular/core/testing';

import { PizzaInterceptorService } from './pizza-interceptor.service';

describe('PizzaInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaInterceptorService = TestBed.get(PizzaInterceptorService);
    expect(service).toBeTruthy();
  });
});
