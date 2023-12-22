import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 

  url = "  http://localhost:3000";
  ownerName: any;
  recordById: any;
  constructor(private httpClient: HttpClient) { }


  postApiCall(endPoint: any,formData :any){
    let url= this.url + '/'+ endPoint;
    
    return this.httpClient.post(url,formData)
  }

  getApiService(endPoint :any){
    let url = this.url + "/" + endPoint;
    return this.httpClient.get(url);
   }

   patchApiCall(endPoint : any,id :any,formData:any){
   let url = this.url+ "/" + endPoint + "/" + id;
   return this.httpClient.patch(url,formData);
   }

   deleteApiCall(endPoint:any,id:any,){
    let url=this.url+"/" + endPoint+ "/" + id;
    return this.httpClient.delete(url);
   }
}
