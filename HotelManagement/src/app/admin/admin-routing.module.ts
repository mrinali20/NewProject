import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminSuccessComponent } from './admin-success/admin-success.component';

const routes: Routes = [
  {path: 'admin-login',component: AdminLoginComponent},
  {path:'admin-signUp',component : AdminSignUpComponent },
  {path:'admin-success',component:AdminSuccessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
