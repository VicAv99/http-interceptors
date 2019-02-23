import { TestBed } from '@angular/core/testing';

import { PizzaInterceptor } from './pizza.interceptor';

describe('PizzaInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaInterceptor = TestBed.get(PizzaInterceptor);
    expect(service).toBeTruthy();
  });
});
