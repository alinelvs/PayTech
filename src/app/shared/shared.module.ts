import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [SidebarComponent, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [
    AngularMaterialModule,
    SidebarComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
