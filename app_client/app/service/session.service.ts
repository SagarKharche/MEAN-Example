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

  public removeAuthToken(): void {
    sessionStorage.removeItem('token');
  }
}