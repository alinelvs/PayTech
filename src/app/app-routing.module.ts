import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/auth/login`,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((modules) => modules.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((modules) => modules.HomeModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
