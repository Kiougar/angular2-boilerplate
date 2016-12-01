import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.checkLogin(true);
  }

  checkLogin(isInit?: boolean) {
    if (this.authService.isLoggedIn) {
      this.message = 'Login was successful!';

      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

      // Set our navigation extras object
      // that passes on our global query params and fragment
      let navigationExtras: NavigationExtras = {
        preserveQueryParams: true,
        preserveFragment: true
      };

      // Redirect the user
      this.router.navigate([redirect], navigationExtras);
    } else if (!isInit) {
      this.message = 'Username/Password combination is incorrect!';
    }
  }

  login(username: string, password: string) {
    this.message = 'Trying to login...';
    this.authService.login(username, password).subscribe(() => {
      this.checkLogin();
    });
  }

}
