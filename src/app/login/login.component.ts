import { Component, OnInit } from '@angular/core';
import{FormsModule, FormBuilder , Validators} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  User={username:'',
        password:''};

 
        constructor(private router: Router ,private _auth:AuthService, private fb:FormBuilder){}
        //send to the databse
        
        ngOnInit() {
        }
        user = this.fb.group({
          email:['',[Validators.required]],
          password:['',[Validators.required]]
        });
      
        errorMsg: String='';
        submitted = false;
      
        get formControl(){
          return this.user.controls;
        }
      
        // userVerify(){
        //   console.log(this.user.value);
        //   this._auth.userVerify(this.user.value)
        //   .subscribe(
        //     res=>{
        //       localStorage.setItem('token',res.token);
        //       console.log('Success');
        //       this.router.navigate(['/home']);
        //     },
        //     err =>{
        //       console.log(err);
        //       this.errorMsg = err;
        //     }
        //   )
        // }
      
      userVerify(){
        this._auth.userVerify(this.user.value)

        .subscribe((data)=>{
          if(data.toString()=="Invalid password" ){
          alert('invalid pass')
        } else if (data.toString() == "user not reg"){
          alert('user not registered')
        } else{
          localStorage.setItem('token', data.toString())
          this.router.navigate(["home"])
        }
        }) 

        
      }
      
      
      }
        
        
         
        
        