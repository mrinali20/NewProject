import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';
@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.css']
})
export class HotelRegistrationComponent {
  hotelRegisterForm: any;
  endPoint="hotelDetails";

  constructor(public router : Router,public fb : FormBuilder,public apiServiceService: ApiServiceService){}
  
  ngOnInit(){
    this.formDetails();
  
   }

   formDetails(){
    this.hotelRegisterForm = this.fb.group({
      ownerName :['',[Validators.maxLength(10),Validators.minLength(3),Validators.pattern("[a-zA-Z]+")]],
      ownerNumber:['',[Validators.pattern("[0-9]+")]],
      hotelName :[],
      hotelAddress:[],
      contactNumber:[],
      password:[],
      menu:[],
    })
  }

 back(){
  this.router.navigateByUrl("ownerMod/owner-success")
    }

    hotelRegister(){
      let endPoint= "hotelDetails"
      this.apiServiceService.postApiCall(this.endPoint,this.hotelRegisterForm.value).subscribe(res=>{ 
    console.log("responce::>>",res); 
    if(res){ 
      alert('Hotel Register Successfuly...!!'); 
      this.router.navigateByUrl("ownerMod/owner-success"); 
    } 
  })
      
}



// getOwnerData(){
//   let endPoint="owner";
//   this.apiServiceService.getApiService(endPoint).subscribe(res=>{
//     this.ownerData=res;
//     console.log("ownerData",this.ownerData);
    
//   })
// }
}
