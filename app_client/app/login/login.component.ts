import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

/* Importing Services */
import { AuthenticationService } from '../service/authentication.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'login-component',
  templateUrl: 'app/login/login.component.html'
})

export class LoginComponent implements OnInit {
  public credentials: any = {};
  constructor(
    private authenticationService: AuthenticationService,
    private sessionService: SessionService,
    private router : Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() { }

  public login(): void {
    this.authenticationService.login(this.credentials).subscribe((response) => {
      this.sessionService.setAuthToken(response.token);
      this.sessionService.setUserDetails(response.userDetails);
      this.authenticationService.notifyLoggedIn();
      this.router.navigate(['home'], {relativeTo: this.activatedRoute});
    });
  }
}