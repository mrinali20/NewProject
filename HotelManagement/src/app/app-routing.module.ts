import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path : '' , component: LandingComponent},
  {path : 'landing' , component: LandingComponent},
  {path: 'adminMod',  
  loadChildren: () => import('./admin/admin/admin.module').then(m => m.AdminModule)},
  {path: 'ownerMod',  loadChildren: () => import('./owner/owner/owner.module').then(m => m.OwnerModule)},
  {path: 'userMod',  loadChildren: () => import('./user/user/user.module').then(m => m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
