import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
role=[{
  role:''
}]
abc:Boolean =false

  constructor(public auth:AuthService, private router:Router) { }
  ngOnInit(): void {
    let a = localStorage.getItem("id")
    this.auth.getrole(a).subscribe((data)=>{
      this.role= JSON.parse(JSON.stringify(data)) ;
      console.log(data)
       let obj = this.role.find((o, i) => {
      return o
    })
    if (obj?.role == 'FosterHome'){
      this.abc=true
    }else{
      this.abc=false
    }
      
    })
  }

  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/']);
  }

}