import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TermsService } from 'src/app/services/terms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private termsSvc: TermsService) { }

  ngOnInit(): void {

    // this.loadSearchTerms();
    
  }


  // loadSearchTerms() {
  //   this.termsSvc.loadTerms();
  // }

  search( term: string ) {
    if (term.length === 0) {
      return;      
    }
    // this.router.navigateByUrl(`/books/search/${term}`);

    this.router.navigateByUrl(`/books/search/${term}`);

    this.termsSvc.saveTerm(term);

  }

}
