import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// @ts-ignore
// 연습용이라지. @로시작하게끔
function skuValidator(control: FormControl): {[s: string]: boolean} {
  if(!control.value.match(/^@/)){
    return {invalidSku: true};
  }
}

export const checkPassword: ValidatorFn = ( control: AbstractControl) : ValidationErrors | null => {
  const password = control.value.password;
  const password_re = control.value.password_re;
  return password === ''|| password_re === '' || password === password_re ? null : { notSame: true }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  redirectTo: string = "";
  signUpForm: FormGroup;
  id: AbstractControl;
  password: AbstractControl;
  password_re: AbstractControl;
  name: AbstractControl;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.signUpForm = new FormGroup({
      'id': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, skuValidator]),
      'password_re': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required])
      }, { validators: checkPassword});

    this.id = this.signUpForm.controls['id'];
    this.password = this.signUpForm.controls['password'];
    this.password_re = this.signUpForm.controls['password_re'];
    this.name = this.signUpForm.controls['name'];
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.redirectTo = params['redirectTo']
    })
  }

  submit(value: string) {
    console.log("signup form submit", value);
    alert(this.name.value+"님, 환영합니다");
    this.router.navigate([this.redirectTo ? this.redirectTo:'/']);

  }
}
