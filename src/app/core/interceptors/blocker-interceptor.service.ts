import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockerInterceptor implements HttpInterceptor {
  constructor(private snackbar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.body && req.body.blocker) {
      const message = 'Reminder: Your teammates are available for help';

      this.notify(message);
    }
    return next.handle(req);
  }

  private notify(message: string) {
    this.snackbar.open(message, 'Ok', { duration: 3000 });
  }

}
