import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminSuccessComponent } from './admin-success/admin-success.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminSignUpComponent,
    AdminSuccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // SharedModule
  ]
})
export class AdminModule { }
