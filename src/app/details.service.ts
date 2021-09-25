import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get('http://localhost:3001/books');
  }

  getBook(id:any){
    return this.http.get('http://localhost:3001/books/'+id);
  }

  addBook(book:any){
    console.log(book);
    return this.http.post('http://localhost:3001/add_book',{'book':book})
    .subscribe(data=>{console.log(data)});
  }

  updateBook(book:any){
    console.log(book);
    return this.http.put('http://localhost:3001/update_book',book)
    .subscribe(data=>{console.log(data)});
  }

  deleteBook(book:any){
    return this.http.delete('http://localhost:3001/delete_book/'+book);
  }

  getAuthors(){
    return this.http.get('http://localhost:3001/authors');
  }
  
  getAuthor(id:any){
    return this.http.get('http://localhost:3001/authors/'+id);
  }

  addAuthor(author:any){
    return this.http.post('http://localhost:3001/add_author',{'author':author})
    .subscribe(data=>{console.log(data)});
  }

  updateAuthor(author:any){
    console.log(author);
    return this.http.put('http://localhost:3001/update_author',author)
    .subscribe(data=>{console.log(data)});
  }

  deleteAuthor(author:any){
    return this.http.delete('http://localhost:3001/delete_author/'+author);
  }

  // getuserrole(){
  //   return this.http.get
  // }

}
