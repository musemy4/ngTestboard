import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';

import { Asset } from '../../model/board/Asset';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse} from '@angular/common/http';

import dummyJson from '../../../../mocks/data.json';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  // inputForm: FormGroup;
  // input1: FormControl;
  // input2: FormControl;
  // input3: FormControl;


  displayedColumns: string[] = ['subLayer', 'assetName', 'address'];

  constructor(private router:Router, private httpService: HttpClient){
    this.getLayerList();
  }

  selects1: string[] =[
    '시군구경계', '읍면동경계', '행정동경계', '보건소', '학교', '경찰서',
    'point_테스트01', 'line_테스트01', 'polygon_테스트01', 'cctv_테스트01'
  ];

  selects2: string[] =[
    '어린이보호', '방범', '스쿨존', '도시공원', '쓰레기', '산불감시'
  ];

  assets: Asset[] = dummyJson;

  ngOnInit () {




  }


  goGetDetail(ele: Asset) {
    console.log("goGetDetail ===");
    //url을 만들어서 보내줌
    this.router.navigate(['/board',ele.serialNum],{
        queryParams: {
          nextUrl:`{select1:selected1,select2:selected2,select3:selected3 }`
        }
    });

  }

  getLayerList() {

  }

  selChanged() {
    console.log("-- onChange --");

  }
}
