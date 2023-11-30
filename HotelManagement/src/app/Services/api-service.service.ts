import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 

  url = "  http://localhost:3000";
  constructor(private httpClient: HttpClient) { }


  postApiCall(endPoint: any,formData :any){
    let url= this.url + '/'+ endPoint;
    
    return this.httpClient.post(url,formData)
  }

  getApiService(endPoint :any){
    let url = this.url + "/" + endPoint;
    return this.httpClient.get(url);
   }
}
