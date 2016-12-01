import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AdminGuard } from './admin-guard.service';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [
      RouterModule.forChild(loginRoutes)
    ],
    exports: [
      RouterModule
    ],
    providers: [
      AuthService,
      AuthGuard,
      AdminGuard
    ],
})
export class LoginRoutingModule { }

