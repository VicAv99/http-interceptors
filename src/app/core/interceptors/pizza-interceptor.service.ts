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
      const pizzaRequest = req.clone({ body: { description: req.body.description.replace(/pizza/gi, '🍕') } });

      return next.handle(pizzaRequest);
    }
    return next.handle(req);
  }

}
