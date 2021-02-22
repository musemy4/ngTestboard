import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Asset } from '../../../model/board/Asset';
// import {dataService} from './data.service';
import dummyJson from '../../../../../mocks/data.json';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})

export class PostViewComponent implements OnInit {
  url: string = "asd";
  backUrl: string = "";//queryParam 뭉텅이: "뒤로가기" 했을때 화면이 유지되도록
  serialNum: string | null = "";

  dummys: Asset[] = dummyJson;
  data:  Asset | object | undefined  = {};


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe((params)=>{ //여기서 this가 무엇인가 component?
      console.log(params.get('serialNum'));
      this.route.queryParams.subscribe((queryParams) => {
        const url = typeof (queryParams.param) === 'string' ? JSON.parse(queryParams.param) : queryParams;
        this.backUrl = url.nextUrl;//string 값추출: 뒤로가기위해
      });
        this.serialNum = params.get('serialNum');

    });
    //***: {subLayer:어린이보호, createdAt:2020-01-26,
    // serialNum:c1, assetName:월량초통학로고정4, address:아산시 음봉면, model:, etc:}
    console.log("***: "+this.backUrl);
    //****: [object Object] 컴포넌트 자체를 의미?
    console.log("****: "+this);
  }

  getDataDetail(): void{
    console.log("ngOnInit and getPost() ===>")
  }

  ngOnInit(): void {
    // this.data=this.dummys.filter(dummy => dummy.serialNum === this.serialNum)[0];
    this.data = this.dummys.find(dummy => dummy.serialNum === this.serialNum); //find: undefined가 뜰수도 있음
    console.log(this.data);
  }

  goAssetList() {
    console.log("다시 리스트로 돌아가자 === ");
    this.router.navigate(['/board'], {
      queryParams: {
        nextUrl: this.backUrl
      }
    });
  }
}
