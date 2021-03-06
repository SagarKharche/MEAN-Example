import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { SessionService } from './service/session.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (!this.sessionService.getAuthToken() && event.url !== '/' && event.url !== '/register') {
          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        }
        if (event.url === '/' && this.sessionService.getAuthToken()) {
          this.router.navigate(['home'], { relativeTo: this.activatedRoute });
        }
        if (!this.sessionService.getAuthToken() && event.url !== '/'&& event.url === '/register') {
          this.router.navigate(['register'], { relativeTo: this.activatedRoute });
        }
      }

    });
  }
}