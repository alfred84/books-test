import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './pages/list/books-list.component';
import { BookDetailComponent } from './pages/detail/book-detail.component';
import { CurrencyPipe } from '../../pipes/currency.pipe';


@NgModule({
  declarations: [
    BooksComponent,
    BookDetailComponent,
    CurrencyPipe
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StarRatingModule.forRoot()
  ]
})
export class BooksModule { }
