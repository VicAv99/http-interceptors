import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.body) {
      const pizza = req.body.description.replace(/pizza/gi, '🍕');
      const pizzaRequest = req.clone({ body: {description: pizza, ...req} });

      return next.handle(pizzaRequest);
    }
    return next.handle(req);
  }

}
