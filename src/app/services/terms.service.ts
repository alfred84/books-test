import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TermsService {
 

  constructor() { } 
  

  public saveTerm(term: string) { 

    if (localStorage['searchItems'] !== undefined) {

      let newTemp = {term};
      let data:any[] = JSON.parse(localStorage['searchItems']);
      data.unshift(newTemp);

      if(data.length > 3){
        data.splice(-1,1);
      }
      
      localStorage.setItem('searchItems', JSON.stringify(data));

    } else {

      let a = [{term}];
      localStorage.setItem('searchItems', JSON.stringify(a));

    }
    
  }

  // public getTerms(key: string) {
  //   return localStorage.getItem(key)
  // }

}
