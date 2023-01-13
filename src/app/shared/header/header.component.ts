import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TermsService } from 'src/app/services/terms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  term1 = '';
  term2 = '';
  term3 = '';

  constructor(private router: Router, private termsSvc: TermsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.loadSearchTerms();

    this.termsSvc.searchTerms$.subscribe((resp) => {
      this.term1 = resp[0].term;
      this.term2 = resp[1].term;
      this.term3 = resp[2].term;
    });
    
  }


  loadSearchTerms() {
    this.termsSvc.getTerms();
  }

  search( term: string ) {
    if (term.length === 0) {
      return;      
    }

    this.router.navigateByUrl(`/books/search/${term}`);
    // this.router.navigate(['/books/search/', term ]);

    this.termsSvc.saveTerm(term);

  }

}
