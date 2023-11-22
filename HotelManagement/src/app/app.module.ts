import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AbloginComponent } from './ab/ablogin/ablogin.component';
import { AdminLogicComponent } from './admin/admin-logic/admin-logic.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AbloginComponent,
    AdminLogicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
