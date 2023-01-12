import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Book } from '../models/book';

const base_url = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http: HttpClient ) { }

  getAllBooks(){
    const url = `${ base_url }/books`;     
    return this.http.get( url );
  }

  getBookByIsbn( isbn: string ){
    const url = `${ base_url }/books/${isbn}`;     
    return this.http.get<Book>( url );
  }

  searchBooks( term: string ) {
    const url = `${ base_url }/books/search/${ term }`;    
    return this.http.get( url );
  }

}
