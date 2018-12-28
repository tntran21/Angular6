import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {

  constructor(
      private _http: HttpClient
  ) { }

  login(username: string, password: string) {
    return this._http.post<any>('api/authencation', {username: username, password: password}).pipe(
        map(user => {
            // Dang nhap thanh cong neu co jwb phan hoi
            if (user && user.token) {
                localStorage.setItem('angularExample1', JSON.stringify(user));
            }

            return user;
        })
    )
  }
}
