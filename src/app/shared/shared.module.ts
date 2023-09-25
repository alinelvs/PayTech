import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [
    AngularMaterialModule,
    SidebarComponent
  ]
})
export class SharedModule { }
