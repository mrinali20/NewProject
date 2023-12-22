import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';
@Component({
  selector: 'app-owner-sign-up',
  templateUrl: './owner-sign-up.component.html',
  styleUrls: ['./owner-sign-up.component.css']
})
export class OwnerSignUpComponent {
  ownerSignUpForm: any;
  showPass=false;
  showPass1=false;
  endPoint:string = "owner";
  isGenderSelected : boolean=false;



  constructor(public router : Router,public fb : FormBuilder,public apiServiceService :ApiServiceService ){
  }
  
ngOnInit(){
  this.formDetails();

 }

 formDetails(){
  this.ownerSignUpForm = this.fb.group({
   userName :['',[ Validators.maxLength(10),Validators.minLength(3)]],
   mobNumber :['',[Validators.maxLength(10),Validators.pattern("[0-9]+")]],
   emailId:[ ,[Validators.pattern(/^[a-zA-Z0-9._%+_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
   password:[,[Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}")]],
   Dob : [],
   panCard:[,[Validators.pattern(/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/)]],
   city:[,[Validators.pattern("[A-Za-z]{2}")]],
   gender:[]

  })
 }

 gender(){
  this.isGenderSelected = false;
  }

 back(){
  this.router.navigateByUrl("ownerMod/owner-login")
    }


    showPassword(){
      
      this.showPass= !this.showPass;

    }
    showPassword1(){
      this.showPass1= !this.showPass1;
    }

    submit(){

      this.apiServiceService.postApiCall(this.endPoint,this.ownerSignUpForm.value).subscribe(res=>{})
      this.router.navigateByUrl("/ownerMod/owner-success")
    }
}
