import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import dummyJson from '../../../../../mocks/person.json';
import { Member } from '../../../model/member/Member';
import { ActivatedRoute, Router } from '@angular/router';

// @ts-ignore
// 연습용이라지. @로시작하게끔
function skuValidator(control: FormControl): {[s: string]: boolean} {
  if(!control.value.match(/^@/)){
    return {invalidSku: true};
  }
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  redirectTo: string = "";
  signInForm: FormGroup;
  id: AbstractControl;
  password: AbstractControl;

  dummys: Member[] = dummyJson;
  data: Member | object | undefined = {};

  constructor(private router:Router,
              private route: ActivatedRoute) {
    // 폼그룹에 폼 컨트롤들을 추가
    this.signInForm = new FormGroup({
      'id': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, skuValidator])
    });

    this.id = this.signInForm.controls['id'];
    this.password = this.signInForm.controls['password'];

    // 변경내용 주시하기. eventEmitter(Observable)
    // this.signInForm.valueChanges.subscribe(
    //   (form: any) => {
    //     console.log('form changed to', form);
    //   }
    // );
  }

  submit(value: string){
    console.log("submit signin form!!");
    if(this.signInForm.valid){ //유효하게 넘어왔는가! (Validators.required, Validators.email)
      console.log("submit valid:", value);
      this.data = this.dummys.find(dummy => dummy.id === this.id.value && dummy.password === this.password.value);
      if(this.data !== undefined){
        alert('로그인에 성공하였읍니다');
        this.router.navigate([this.redirectTo ? this.redirectTo:'/']);
      } else alert('로그인정보를 확인하세요');
    }

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.redirectTo = params['redirectTo']
    })
  }

}

// service를 통한 validation

    // if (this.signInForm.valid) {
    //   this.signService.signIn(this.signInForm.value.id, this.signInForm.value.password)
    //     .then(data => {
    //       alert('로그인에 성공하였습니다');
    //     })
    //     .catch(response => {
    //       alert('로그인에 실패하였습니다 - ' + response.error.msg);
    //     });
    // }


