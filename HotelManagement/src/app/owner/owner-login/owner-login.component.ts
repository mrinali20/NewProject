import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css']
})
export class OwnerLoginComponent {
  ownerLoginForm: any;
  showPass= false ;
  ownerData:any;
  constructor(public router : Router,public fb : FormBuilder,public apiServiceService :ApiServiceService){}


  ngOnInit(){
    this.formDetails();
    this.getOwnerData();
   }
  
   formDetails(){
    this.ownerLoginForm = this.fb.group({
     userName :['',[Validators.maxLength(10),Validators.minLength(4),Validators.pattern("[a-zA-Z]+")]],
     password:["",[Validators.required]] 
    })
  }

getOwnerData(){
  let endPoint="owner";
  this.apiServiceService.getApiService(endPoint).subscribe(res=>{
    this.ownerData=res;
    console.log("ownerData",this.ownerData);
    
  })
}

login(){


  if(this.ownerData){
    var matchedObj=this.ownerData.find((item:any)=>{
      if( item.userName==this.ownerLoginForm.value.userName && item.password == this.ownerLoginForm.value.password){
        return item;

      }
    })
  }
  if(matchedObj){
    this.apiServiceService.ownerName = this.ownerLoginForm.value.userName;
    this.router.navigateByUrl("ownerMod/owner-success")
  }
  
  else{
    this.router.navigateByUrl('ownerMod/owner-login')
  }
}





  back(){
this.router.navigateByUrl("landing")
  }

  SignUp(){
    this.router.navigateByUrl("ownerMod/owner-signUp")
  }

 

  
  showPassword(){
      
    this.showPass= !this.showPass;

  }

}
