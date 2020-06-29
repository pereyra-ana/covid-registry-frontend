import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ResponseHttpInterceptor implements HttpInterceptor {

    constructor(
        private snackBar: MatSnackBar,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err instanceof HttpErrorResponse) {
                let message = "Ha ocurrido un error inesperado";
                if (err.error.descripcion != null && err.error.descripcion != "")
                    message = err.error.descripcion;

                this.snackBar.open(message, 'Cerrar', {
                    duration: 2000,
                });
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
