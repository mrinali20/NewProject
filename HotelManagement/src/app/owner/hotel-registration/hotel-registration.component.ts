import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';
@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.css']
})
export class HotelRegistrationComponent {
  hotelRegisterForm: any;
  endPoint="owner";

  constructor(public router : Router,public fb : FormBuilder,public apiServiceService: ApiServiceService){}
  
  ngOnInit(){
    this.formDetails();
  
   }

   formDetails(){
    this.hotelRegisterForm = this.fb.group({
      ownerName :[],
    })
  }

 back(){
  this.router.navigateByUrl("ownerMod/owner-success")
    }

    hotelRegister(){

      this.apiServiceService.postApiCall(this.endPoint,this.hotelRegisterForm.value).subscribe(res=>{ 
    console.log("responce::>>",res); 
    if(res){ 
      alert('Data submitted Successfuly...!!'); 
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
