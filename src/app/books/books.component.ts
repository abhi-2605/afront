import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DetailsService } from '../details.service';
import { BookModel } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  title: String = 'Books';
 

  books: BookModel[] = [];

  imageWidth:number = 150;
  imageMargin: number = 4;

  constructor(private http:HttpClient, private detailsService:DetailsService, public auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.detailsService.getBooks().subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
      console.log(this.books);
    });
   

  }

  editBook(id:any){
    localStorage.setItem('editBookId',id._id.toString());
    console.log(localStorage.getItem('editBookId'));
    this.router.navigate(['/update_book']);
  }

  deleteBook(i:any){
   this.detailsService.deleteBook(i._id)
   .subscribe((data) => {
    alert('Book has been deleted');
    this.books = this.books.filter(p => p !== i);
    
  })
  }

}

