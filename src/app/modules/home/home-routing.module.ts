import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: `/home/dashboard`,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  }

];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
