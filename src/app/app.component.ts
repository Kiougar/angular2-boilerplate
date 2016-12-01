import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My App Title';

  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  logout(event: Event) {
    event.preventDefault();
    this.authService.logout().subscribe(function () {
      console.log('`logout#subscribe` arguments: ', arguments);
    });
  }
}
