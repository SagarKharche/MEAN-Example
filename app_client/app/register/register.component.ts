import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'register-user',
  templateUrl: 'app/register/register.component.html'
})

export class RegisterComponent implements OnInit {
  public credentials: any = {};
  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() { }

  public registerUser(): void {
    console.log('register');
    this.authenticationService.register(this.credentials).subscribe((response) => {
      console.log(response);
    });
  }
}