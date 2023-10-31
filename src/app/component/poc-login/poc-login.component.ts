import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poc-login',
  templateUrl: './poc-login.component.html',
  styleUrls: ['./poc-login.component.scss']
})
export class PocLoginComponent {
  isFormInvalid = false;
  studentForm: any;
  onSubmit() {
   if(this.studentForm.valid){
        this.studentForm.reset();
      }
      // this.dataarray.push(this.studentForm.value);


     else {
      this.isFormInvalid = true;
    }
  
}
}