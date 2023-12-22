import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserSuccessComponent } from './user-success/user-success.component';

const routes: Routes = [
  {path :'user-login',component:UserLoginComponent },
  {path:'user-signUp',component : UserSignUpComponent },
  {path:'user-success',component:UserSuccessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
