import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TermsService { 

  searchTerms$ = new ReplaySubject<any>(1);

  constructor() { } 

  public getTerms() {

    if(localStorage['searchItems'] === undefined) {      
      return;      
    }

    let data:any[] = JSON.parse(localStorage['searchItems']);
    
    this.searchTerms$.next(data);

    return data;      
  }  

  public saveTerm(term: string) { 

    if (localStorage['searchItems'] !== undefined) {

      let newTemp = {term};
      let data:any[] = JSON.parse(localStorage['searchItems']);
      data.unshift(newTemp);

      if(data.length > 3){
        data.splice(-1,1);
      }
      
      localStorage.setItem('searchItems', JSON.stringify(data));

      this.searchTerms$.next(data);

    } else {

      let a = [{term}];
      localStorage.setItem('searchItems', JSON.stringify(a));

      let value = JSON.parse(localStorage['searchItems']);

      this.searchTerms$.next(value);

    }


    
  }  

}
