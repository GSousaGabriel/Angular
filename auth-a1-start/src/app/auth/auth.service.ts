import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';
import { UserData } from '../shared/interfaces/user-data';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = 'http://localhost:8080/';
  private user = new Subject<User>();
  public user$= this.user.asObservable()

  constructor(
    private http: HttpClient
  ) { }

  signIn(userData: UserData): Observable<any> {
    return this.http.post(`${this.api}users/${userData.email}`, userData).pipe(catchError((errorResponse => {
      if (!errorResponse.error || !errorResponse.error.error) {
        return throwError(errorResponse)
      }
      return throwError(errorResponse.error.error)
    })),
      tap((resData) => {
        const user = new User(resData.user.email, resData.user._id, resData.expiration)
        this.user.next(user)
      })
    )
  }

  signUp(userData: UserData): Observable<any> {
    return this.http.post(`${this.api}users`, userData).pipe(catchError((errorResponse => {
      if (!errorResponse.error || !errorResponse.error.error) {
        return throwError(errorResponse)
      }
      return throwError(errorResponse.error.error)
    })))
  }
}
