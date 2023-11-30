import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.css']
})
export class OwnerSuccessComponent {

  constructor(public router : Router){
    
  }

  Registration(){
    this.router.navigateByUrl("ownerMod/hotel-registration")
  }

  back(){
    this.router.navigateByUrl("ownerMod/owner-login")
      }



}
