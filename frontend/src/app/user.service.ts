import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './Types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  public createUserService(user: User) {
    return this.http.post( this.baseurl + '/register', user, this.httpOptions );
  }

  public getUsersService() {
    return this.http.get(this.baseurl + '/getAllUsers', this.httpOptions );
  }

  public deleteUsersService(user: any) {
    return this.http.delete(this.baseurl + '/deleteUser/' + user.id, this.httpOptions );
  }
}
