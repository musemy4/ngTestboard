// 단일 결과를 받을 모델
export interface ApiResponseSingle {
  success: boolean;
  code: number;
  msg: string;
  data: any;
}

//예를 들어 로그인 api 의 성공 실패 결과는 다음과 같은 형태의 json으로 결과가 내려온다
// 성공
// {
//   "success": true,
//   "code": 0,
//   "msg": "성공하였습니다.",
//   "data": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTU2ODU2MTk5MCwiZXhwIjoxNTY4NTY1NTkwfQ.XTwP9K3dvljx4d04zHWM_pS1UDGIyFj71UrsUeWzbCg"
// }
// // 실패
// {
//   "success": false,
//   "code": -1001,
//   "msg": "계정이 존재하지 않거나 이메일 또는 비밀번호가 정확하지 않습니다."
// }// 성공
// {
//   "success": true,
//   "code": 0,
//   "msg": "성공하였습니다.",
//   "data": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTU2ODU2MTk5MCwiZXhwIjoxNTY4NTY1NTkwfQ.XTwP9K3dvljx4d04zHWM_pS1UDGIyFj71UrsUeWzbCg"
// }
// // 실패
// {
//   "success": false,
//   "code": -1001,
//   "msg": "계정이 존재하지 않거나 이메일 또는 비밀번호가 정확하지 않습니다."
// }
