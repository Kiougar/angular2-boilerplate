import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    // TODO do actual login here
    return Observable.of(true).delay(1000).do(() => {
      this.isLoggedIn = true;
      this.isAdmin = true;
    });
  }

  logout(redirect = true): Observable<boolean> {
    // TODO do actual logout here
    return Observable.of(true).delay(1000).do(() => {
      this.isLoggedIn = false;
      this.isAdmin = false;
      if (redirect) { this.router.navigate(['/login']); }
    });
  }
}
