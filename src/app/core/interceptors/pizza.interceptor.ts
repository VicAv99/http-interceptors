import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.body) {
      let { description } = req.body;
      description = description.replace(/pizza/gi, '🍕');
      const pizzaRequest = req.clone({ body: { description } });

      return next.handle(pizzaRequest);
    }
    return next.handle(req);
  }

}
