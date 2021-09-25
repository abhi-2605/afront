import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  constructor(private detailsService:DetailsService, private router:Router) { }

  newAuthor = {
    name:String,
    description:String,
    image:String
  }

  ngOnInit(): void {
    let authorId = localStorage.getItem('editAuthorId');
    this.detailsService.getAuthor(authorId).subscribe((data)=>{
      this.newAuthor=JSON.parse(JSON.stringify(data));
    });
  }

  title: String = 'Update Author';

  updateAuthor(){
    console.log(this.newAuthor);
    this.detailsService.updateAuthor(this.newAuthor);
    alert('Author has been updated');
    this.router.navigate(['/authors']);
  }

}

