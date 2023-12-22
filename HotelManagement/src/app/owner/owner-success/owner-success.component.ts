import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';


@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.css']
})
export class OwnerSuccessComponent {
  hotelDetails: any;
  ownerName:any;
  hotelDetailsByOwner!:any[];
  headings = ["Hotel Name","Hotel Address","Hotel Number","Hotel Menu","Room","Edit","Delete"];
  showRecord:boolean = false;
  searchText:any;

  constructor(public router : Router,public apiServiceService :ApiServiceService){
    
  }
  ngOnInit(){
    this.ownerName=this.apiServiceService.ownerName;
  }
 
async showHotelList(){
    this.hotelDetailsByOwner = [];
    this.hotelDetails = await this.apiServiceService.getApiService("hotelDetails").toPromise()
      console.log("hotelDetails",this.hotelDetails);
      this.getHotelByOwner()
  }
  getHotelByOwner(){
    this.hotelDetails.forEach((element:any) => {
      if(element.ownerName == this.ownerName ){
        this.hotelDetailsByOwner.push(element)
      }
    });
    // if(this.hotelDetailsByOwner.length > 0){
    //  this.showRecord = true;
    // }
    // console.log("hotel list by owner",this.hotelDetailsByOwner);
    
  }
  Registration(){
    this.router.navigateByUrl("ownerMod/hotel-registration")
  }

  back(){
    this.router.navigateByUrl("ownerMod/owner-login")
      }

      edit(id:any){
  let recordById : any=[];
  this.hotelDetails.forEach((ele:any)=>{
if(ele.id==id){
  recordById.push(ele)
}
  })
  console.log("record",recordById);
  this.apiServiceService.recordById= recordById;
  this.apiServiceService =id;
  this.router.navigateByUrl("ownerMod/hotel-registration")
  
      }

  delete(id:any){
    this.apiServiceService.deleteApiCall("hotelDetails",id).subscribe(res=>{})
    this.showHotelList();
  }
}
