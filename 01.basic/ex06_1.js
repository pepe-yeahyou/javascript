/* 산술연산 */

let a=5*3;
let b=5/3;
let c=5%3;

// 결과 값은 실?수로 표현
console.log("5와 3을 가지고 아래와 같이 연산했을때 값은");
console.log("곱하기:",a); 
console.log("나누기:",b); // 정?수로 표현하고싶으면 parseInt 메서드 사용하믄됨ㅇㅇ 
console.log("나머지:",c); 

console.log();
console.log();


// 전위연산 - 먼저 증가하고, 이후에 대입
let x=5;
let pre= ++x;
console.log("x는:",x);
console.log("pre는:",pre);


// 후위연산 - 먼저 대입하고, 이후에 증가 
let y=5;
let post=y++;
console.log("y는:",y);
console.log("pre는:",post);

//일반적인 ++,--의 표현
let num=1;
num++;
++num;

// 비교연산자 

