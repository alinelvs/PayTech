import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthComponent } from './pages/auth/auth.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: `/auth/login`,
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthComponent,
    children: [

      { path: 'login', component: LoginComponent }
    ],
  },
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
