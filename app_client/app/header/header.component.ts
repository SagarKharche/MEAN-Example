import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Importing Services */
import { SessionService } from '../service/session.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: 'app/header/header.component.html'
})

export class HeaderComponent implements OnInit {
  public isUserLoggedIn: any = {};
  constructor(
    private sessionService : SessionService,
    private router: Router,
    private authenticationService :AuthenticationService
  ) { }

  public ngOnInit() {
    this.isUserLoggedIn = this.sessionService.getAuthToken();
    this.authenticationService.loggedIn.subscribe(() => {
      this.isUserLoggedIn = this.sessionService.getAuthToken();
    });
  }

  public logout(): void {
    this.sessionService.removeAuthToken();
    this.isUserLoggedIn = this.sessionService.getAuthToken();
    this.router.navigate(['/']);
  }
}