import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, text : any): any {
    let text1= text?.toLowerCase();

    if(!text) return data;

    if(text){
      return data.filter((item:any)=>{
        return JSON.stringify(item).toLowerCase().includes(text1)
      })
    }
  }

}
