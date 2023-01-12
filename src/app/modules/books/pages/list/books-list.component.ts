import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { delay } from 'rxjs/operators';
import { TermsService } from 'src/app/services/terms.service';

@Component({
  selector: 'app-books',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksComponent implements OnInit {

  public books: Book[] = [];

  constructor( private booksSvc: BooksService, private route: ActivatedRoute, private termsSvc: TermsService ) { }

  ngOnInit(): void {

    this.loadBooks();
    this.route.params.subscribe(params => this.search(params['term']));
  }

  loadBooks() {

    this.booksSvc.getAllBooks()
    .subscribe( (resp: any) => {

      this.books = resp;

      // console.log(this.books);

    });

  }

  search( term?: string) {

    if (term) {

      this.booksSvc.searchBooks(term)
      .pipe(delay(100)).subscribe( (resp: any) => {

        this.books = resp;

        // console.log(this.books);

      });


      // this.termsSvc.
      
    }    

  }

}
