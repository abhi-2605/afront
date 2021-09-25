import { Injectable } from '@angular/core';
//import HttpClient
import {HttpClient} from '@angular/common/http';
import { AuthorsComponent } from './authors/authors.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  //create object for HttpClient
  constructor(private http:HttpClient){}
  getAuthors(){
    return this.http.get("http://localhost:3001/author");//do the get request to the specific url
  }
  newAuthor(item:any)
  {
    return this.http.post("http://localhost:3001/insert",{"author":item})
    .subscribe(data =>{console.log(data)});
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
deleteAuthor(id:any)
{

  return this.http.delete("http://localhost:3001/remove/"+id)

}
editAuthor(item:any)
{
  console.log('client update')
  return this.http.put("http://localhost:3001/update",AuthorsComponent)
  .subscribe(data =>{console.log(data)})
}
}


