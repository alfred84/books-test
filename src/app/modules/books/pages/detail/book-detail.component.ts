import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public bookSelected!: Book;

  constructor( private booksSvc: BooksService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getBookByIsbn(params['isbn']))
  }

  getBookByIsbn( isbn: string) {

    this.booksSvc.getBookByIsbn(isbn)
    .subscribe( (resp: Book) => this.bookSelected = resp);

  }

}
