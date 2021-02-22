// 리스트 결과를 받을 모델
export interface ApiResponseList {
  success: boolean;
  code: number;
  msg: string;
  list: any[];
}
