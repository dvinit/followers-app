import { passwordValidators } from './password.validators';
import { UsernameValidators } from './username.validators';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  formy:FormGroup;
  constructor(fb:FormBuilder){
   this.formy=fb.group({
   oldPassword:['',Validators.required,passwordValidators.validOldPassword],
   newPassword:['',Validators.required],
   confirmPassword:['',Validators.required]

   });

  }

get oldPassword(){
  return(this.formy.get('oldPassword'));
}
get newPassword(){
  return(this.formy.get('newPassword'));
}
get confirmPassword(){
  return(this.formy.get('confirmPassword'));
}
}
