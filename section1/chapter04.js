console.log("chapter4");

//1. 변수
let age; // 변수 선언, 초기화  -- 중복 안됨, 초기화 생략 가능
console.log(age);

age = 30;
console.log(age);

//2. 상수
const birth = "1998.01.22"; // 변할 수 없거나 변할 수 없는 값을 쓸 때 사용. 선언과 동시에 초기화 필수

//3. 변수 명명규칙(네이밍규칙)
//3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

//3-2. 숫자로 시작할 수 없다.
let 1name; //X
let name1;
let $1name; //O

//3-3. 예약어를 사용할 수 없다.
let if; //X

//4. 변수 명명 가이드
//누가 봐도 무엇을 의미하는지 알 수 있는 것들로
let salesCount = 30;
let refundCount = 22;
let totalCount = salesCount - refundCount;
console.log(totalCount);
