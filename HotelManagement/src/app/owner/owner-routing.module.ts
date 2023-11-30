import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';


const routes: Routes = [
  {path :'owner-login',component:OwnerLoginComponent},
  {path:'owner-signUp',component : OwnerSignUpComponent },
  {path:'owner-success',component:OwnerSuccessComponent},
  {path:'hotel-registration',component:HotelRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
