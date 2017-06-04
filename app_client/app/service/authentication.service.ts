import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject }    from 'rxjs/Subject';

/* */
import { SessionService } from './session.service'

@Injectable()
export class AuthenticationService {
  public loggedIn: Subject<any> = new Subject();
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
    const header = new Headers({ Authorization: 'Bearer ' + token, 'Content-Type': 'application/json; charset=utf-8' });
    return new RequestOptions({headers: header});
  }

  public notifyLoggedIn(): void {
    this.loggedIn.next('true');
  }
}