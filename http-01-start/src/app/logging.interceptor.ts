import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(req.url)
    return next.handle(req).pipe(
      tap({
        next: (event)=>{
          if(event.type === HttpEventType.Response){
            console.log('body here: ' + event.body)
          }
        }
      })
    );
  }
}
