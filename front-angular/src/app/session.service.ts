import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SessionService {

  constructor(private http: HttpClient) { }

  handleError(e) {
    // return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3010/api/auth/signup`, user)
      .toPromise()
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3010/api/auth/login`, user)
      .toPromise()
      .then(userData => userData)
      .catch(userData => ({
        error: 'Username or password are incorrect'
      }));
  }

  logout() {
    return this.http.get(`http://localhost:3010/api/auth/logout`)
      .toPromise()
      .catch(this.handleError);
  }
}