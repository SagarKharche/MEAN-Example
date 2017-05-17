import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/* */
import { SessionService } from './session.service'

@Injectable()
export class AuthenticationService {

  constructor(
    private http: Http,
    private sessionService: SessionService
  ) { }

  public login(user: any) {
    return this.http.post('http://localhost:3000/api/login', user).map(res => res.json());
  }

  public register(user: any) {
    return this.http.post('http://localhost:3000/api/register', user).map(res => res.json());
  }

  public createAuthHeader(): RequestOptions {
    const token = this.sessionService.getAuthToken();
    const header = new Headers({ Authorization: 'Bearer ' + token });
    header.append('Content-Type', 'application/json; charset=utf-8');
    return new RequestOptions({headers: header});
  }
}