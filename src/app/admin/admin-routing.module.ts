import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminGuard } from '../login/admin-guard.service';
import { AdminDashboardComponent } from './admin-dashboard.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        canActivateChild: [AdminGuard],
        children: [
          {path: '', component: AdminDashboardComponent},
          // add other children here
        ]
      }
    ]
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(adminRoutes)
    ],
    exports: [
      RouterModule
    ],
})
export class AdminRoutingModule { }
