import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaInterceptor implements HttpInterceptor {
  constructor() { }

// An outgoing HTTP request with an optional typed body.
//
// `HttpRequest` represents an outgoing request, including URL, method,
// headers, body, and other request configuration options. Instances should be
// assumed to be immutable. To modify a `HttpRequest`, the `clone`
// method should be used.
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
