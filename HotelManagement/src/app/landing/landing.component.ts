import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(public router : Router){}


  admin(){
    this.router.navigateByUrl('adminMod/admin-login')
  }

  owner(){
    this.router.navigateByUrl('ownerMod/owner-login')
  }

  user(){
    this.router.navigateByUrl('userMod/user-login')
  }
}
