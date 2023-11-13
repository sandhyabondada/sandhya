import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poc-login',
  templateUrl: './poc-login.component.html',
  styleUrls: ['./poc-login.component.scss']
})
export class PocLoginComponent {
  constructor(private _formBuilder: FormBuilder, public router:Router){ }
 
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  issubmitted = false;
 
  ngOnInit(): void { }
 
  public loginForm = this._formBuilder.group({
 
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
 
  submitLogin(values:any){
    if(this.loginForm.valid){
      const isEmailExist = (values.email == 'administrator' && values.password == 'louisville')
      if(isEmailExist){
        this.router.navigate(['/login'])
      } else {
        // this.invalidLogin = true;
        this.loginfailed=true;
      }
 
    }else {
      this.issubmitted=true
    }
  }
 
 
  loginfailed=false;
  Ok(){
    this.loginfailed=false;
  }
  ShowPassword=false
}