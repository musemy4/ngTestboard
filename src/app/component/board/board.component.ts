import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';

import { Asset } from '../../model/board/Asset';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse} from '@angular/common/http';

import dummyJson from '../../../../mocks/data.json';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  backUrl: string = 'asd';
  // 필터링 조건 세가지
  input1Control= new FormControl('');
  input2Control= new FormControl('');
  input3Control= new FormControl('');



  displayedColumns: string[] = ['subLayer', 'assetName', 'address'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpClient
  ){
    this.route.paramMap.subscribe((params)=>{
      this.route.queryParams.subscribe((queryParams)=>{
        const url = typeof (queryParams.param) === 'string' ? JSON.parse(queryParams.param): queryParams;
        console.log(url.nextUrl+"***");
        this.backUrl = url.nextUrl;
        if(this.backUrl!== undefined){
          const paramArr = this.backUrl.split(',');
          console.log(paramArr);

          //다시 selectbox에 채워넣자
          for(let i=0; i<paramArr.length;i++){
            const value = paramArr[i].split(':');
            switch(i) {
              case 0:
                this.input1Control.setValue(value[1]);
                break;
              case 1:
                this.input2Control.setValue(value[1]);
                break;
              case 2:
                this.input3Control.setValue(value[1]);
                break;
            }
          }
        }
      });
    });
  }

  inputs1: string[] =[
    '시군구경계', '읍면동경계', '행정동경계', '보건소', '학교', '경찰서',
    'point_테스트01', 'line_테스트01', 'polygon_테스트01', 'cctv_테스트01'
  ];

  inputs2: string[] =[
    '어린이보호', '방범', '스쿨존', '도시공원', '쓰레기', '산불감시'
  ];


  assets: Asset[] = dummyJson; //이것그대로 출력됨? 필터링 거치게 하자

  ngOnInit () {
  }


  goGetDetail(ele: Asset) {
    console.log("goGetDetail ===");
    //url을 만들어서 보내줌
    this.router.navigate(['/board', ele.serialNum],{
        queryParams: {
          nextUrl:`input1:${this.input1Control.value}, input2:${this.input2Control.value},input3:${this.input3Control.value}`
        }
    });
  }

  // 변경내용 주시하기. eventEmitter(Observable)


  getAssetList(page: number){
    let input1 = this.input1Control.value;
    let input2 = this.input2Control.value;
    let input3 = this.input3Control.value;

    if (input1 === '' && input2 === '' && input3 ==='') this.assets = dummyJson;
    else {
        console.log("필터링 대상이 있다!");
    }
  }

}
