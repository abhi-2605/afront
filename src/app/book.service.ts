import { Injectable } from '@angular/core';
//import HttpClient
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //create object for HttpClient
  constructor(private http:HttpClient){}
  getBooks(){
    return this.http.get("http://localhost:3001/books");//do the get request to the specific url
  }
  newBook(item:any)
  {
    return this.http.post("http://localhost:3001/insert",{"book":item})
    .subscribe(data =>{console.log(data)});
  }
  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:3001/remove/"+id)

  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3001/update",book)
    .subscribe(data =>{console.log(data)})
  }
}

