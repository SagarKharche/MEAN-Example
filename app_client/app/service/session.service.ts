import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  constructor() { }
  
  public setAuthToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  public getAuthToken(): string {
    return sessionStorage.getItem('token');
  }

  public setUserDetails(user: any): void {
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  public getUserDetails(): any {
    return JSON.parse(sessionStorage.getItem('loggedInUser'));
  }

  public removeAuthToken(): void {
    sessionStorage.removeItem('token');
  }
}