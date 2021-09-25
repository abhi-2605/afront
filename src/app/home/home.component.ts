import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title='LIBRARY APP';
  username:any
  
  constructor(private router:Router, public _auth:AuthService) { }
 
  ngOnInit(): void {

    let id= localStorage.getItem("token")
    
    this._auth.getUserName(id).subscribe((data)=>{
      this.username=JSON.parse(JSON.stringify(data));
      localStorage.setItem('id', data.toString())
    })
  

  }
  logoutUser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['home'])
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }

}
