import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { SharedModule } from '../shared/shared.module';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';



@NgModule({
  declarations: [
    OwnerLoginComponent,
    OwnerSignUpComponent,
    OwnerSuccessComponent,
    HotelRegistrationComponent,
   
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
  

  ]
})
export class OwnerModule { }
