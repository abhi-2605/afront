import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private http:HttpClient, private detailsService:DetailsService, private router:Router) { }

  // newBook = new FormGroup({
  //   title: new FormControl(''),
  //   author: new FormControl(''),
  //   genre: new FormControl(''),
  //   description: new FormControl(''),
  //   image: new FormControl('')
  // });

  newBook = {
    title:'',
    author:'',
    genre:'',
    description:'',
    image:''
  }

  ngOnInit(): void {
    let bookId = localStorage.getItem('editBookId');
    this.detailsService.getBook(bookId).subscribe((data)=>{
      this.newBook = JSON.parse(JSON.stringify(data));
    });
  }

  title: String = 'Update Book';

  updateBook(){
    console.log(this.newBook);
    this.detailsService.updateBook(this.newBook);
    alert('Book has been updated');
    this.router.navigate(['/books']);
  }

}
