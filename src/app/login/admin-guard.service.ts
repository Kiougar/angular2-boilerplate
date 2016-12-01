import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard extends AuthGuard {

  constructor(protected authService: AuthService, protected router: Router) {
    super(authService, router);
  }

  checkLogin(url: string): boolean {
    return super.checkLogin(url) && this.authService.isAdmin;
  }
}
