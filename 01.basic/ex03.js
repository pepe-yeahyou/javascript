
/* 
    변수의 선언방법
    var name;
*/

// 변수선언

var a = 30;
console.log(a);

var b;
b=3;
console.log(b);

var b;
b="홍길동";
console.log(b);

// 변수의 값을 변경

a=100;
console.log("변경된 a값 :",a);

var result =a+100;
console.log("변경된 result값 :",result);


// let 변수 - es06에서 추가된 키워드
// 동일한 변수 선언 불가
/* let c = 10;
let c = 20;
console.log(c); */

// const - es06에서 추가된 키워드 (상수)
const PI=3.14;  // const는 반드시 값을 선언해야함.
// PI=6.28; // 최초 할당된 값은 다시 할당할 수 없다.
console.log(PI);


