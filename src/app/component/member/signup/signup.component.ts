import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// @ts-ignore
// 연습용이라지. @로시작하게끔
function skuValidator(control: FormControl): {[s: string]: boolean} {
  if(!control.value.match(/^@/)){
    return {invalidSku: true};
  }
}



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  id: AbstractControl;
  password: AbstractControl;
  password_re: AbstractControl;
  name: AbstractControl;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.signUpForm = this.formBuilder.group({
      'id': ['', Validators.required, Validators.email],
      'password': ['', Validators.required, skuValidator],
      'password_re': ['', Validators.required],
      'name': ['', Validators.required]
      }, {validator: this.checkPassword}
    );
    this.id = this.signUpForm.controls['id'];
    this.password = this.signUpForm.controls['password'];
    this.password_re = this.signUpForm.controls['password_re'];
    this.name = this.signUpForm.controls['name'];
  }

  checkPassword(group: FormGroup) {
    let password = group.controls.password.value;
    let password_re = group.controls.password_re.value;
    return password === ''|| password_re === '' || password === password_re ? null : { notSame: true }
  }


  ngOnInit(): void {
  }

  submit(value: string) {
    console.log("signup form submit", value);
  }
}
