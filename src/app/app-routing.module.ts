import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreloadSelectedModules } from './preload-strategy';
import {AdminGuard} from './login/admin-guard.service';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    data: {
      preload: true
    }
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AdminGuard]
  }
];


@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {preloadingStrategy: PreloadSelectedModules}
      )
    ],
    exports: [
      RouterModule
    ],
    providers: [
      PreloadSelectedModules
    ]
})
export class AppRoutingModule { }
