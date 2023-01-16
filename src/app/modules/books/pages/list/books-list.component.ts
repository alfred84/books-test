import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksComponent implements OnInit {

  public books: Book[] = [];

  constructor( private booksSvc: BooksService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {      
      if (params['term']) {
        this.search(params['term']);       
      } else {
        this.loadBooks();
      }
    });
  }

  loadBooks() {

    this.booksSvc.getAllBooks()
    .subscribe( (resp: any) => {

      this.books = resp;

    });

  }

  search( term?: string) {

    if (term) {

      this.booksSvc.searchBooks(term)
      .subscribe( (resp: any) => {
        this.books = resp;
      });
      
    }    

  }

}
