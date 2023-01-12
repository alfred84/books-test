import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './pages/detail/book-detail.component';
import { BooksComponent } from './pages/list/books-list.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: ':isbn/details', component: BookDetailComponent },
  { path: 'search/:term', component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
