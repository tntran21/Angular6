import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'api/user'

  constructor(
    private _http: HttpClient
  ) { }

  // getUser
  getUsers() {
    return this._http.get<User[]>(this.baseUrl);
  }
  // getUserById
  getUserById(id: number) {
    return this._http.get<User>(this.baseUrl + '/' + id);
  }
  // addUser
  createUser(user: User) {
    return this._http.post(this.baseUrl, user);
  }
  // updateUser
  updateUser(user: User) {
    return this._http.put(this.baseUrl + '/'+ user.id , user );
  }
  // deleteUser
  deleUser(id: number) {
    return this._http.delete(this.baseUrl + '/' + id);
  }
}
