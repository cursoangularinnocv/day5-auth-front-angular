import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable()
export class SessionService {

  constructor(private http: HttpClient) { }

  handleError(e) {
    // return Observable.throw(e.json().message);
  }

  // canActivate(user): any {
  //   console.log('canActivate guard has been called');
  //   return this.login(user).then(userData => userData)
  //     .catch(userData => ({
  //       error: 'Username or password are incorrect'
  //     }));
  // }

  signup(user) {
    return this.http.post(`http://localhost:3010/api/auth/signup`, user)
      .toPromise()
      .catch(this.handleError);
  }

  login(user): Promise<object> {
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