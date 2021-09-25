import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title: String = "Sign Up";

  submitted = false;
  errorMsg: String = '';

  // newUser = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   password_2: new FormControl(''),
  //   phone: new FormControl('')
  // });

  newUser = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*[$@$!%#?&])[A-Za-z\d$@$!%#?&]{8,}$/)]],
    // password_2:['',[Validators.required,Validators.prototype]],
    phone:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
    role:['',[Validators.required]]
  });

  constructor(private auth:AuthService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get formControl(){
    return this.newUser.controls;
  }

  userSignUp(){
     console.log(this.newUser.value);
     this.auth.userSignUp(this.newUser.value);
     console.log("Success");
     alert("User has been successfully registered");
     this.router.navigate(['/login']);

    this.submitted = true;
    this.errorMsg = '';
    console.log(this.newUser.value);
    this.auth.userSignUp(this.newUser.value).subscribe(
      res =>{
        alert('User has been Successfully Registered');
        this.router.navigate(['/login']);
      },
      err =>{
        if(err.status == 422){
          this.errorMsg = err;
        }
      }
    )
  }

}