/* 
 화살표함수
 익명함수가 화살표함수(=>)로 변경
*/
/* 
let add = function(a,b){
    return a+b;
}
 */
/* 
let add = (a,b) =>{ // 호이스팅 불가능
    return a+b;
}
 */

// 코드가 한줄이면 {}와 return 생략

/* 
   화살표함수에서 한줄 코드에서 {} 및 return 생략이 가능한데, 
   생략한 문법에서 return을 추가하면 틀린 문법이 되버림
 */

// rule 1. 코드가 한줄이면 () 및 return 생략 가능(자동리턴)
let add=(a,b)=>a+b;
let some=() => console.log("hello some");
//let x=(a) => a%2===0?"짝수":"홀수";

console.log(add(3,4));
some();


// rule2. parameter가 "1개"라면 ()를 생략할수있음.
/* let square=x=>x*x;
console.log(square(5)); */
let x=(a) => a%2===0?"짝수":"홀수";
console.log(x(3));


// rule3. 객체 반환시 ()로 감싸야함.
//let person=()=>{return {name:"pepe"};} // 아래 함수와 같은의미
let person=()=>({name:"pepe"});

/* let person=()=>{name:"홍길동"}
let r=person(); 
console.log(r); */ //틀린문법


console.log(person());

console.log("-------------------------------");

function myName(name,age){
    return `${name}님의 나이는 ${age}입니다.`
}

//익명함수
let myName2=function(name,age){
    return `${name}님의 나이는 ${age}입니다`
}
console.log(myName2("김길동","30"));

//화살표함수
let myName3=(name,age)=>`${name}님의 나이는 ${age}입니다.`;
console.log(myName3("이길동","15"));



