/* 
    var 변수의 scope는 함수 -> 변수 중복선언 등 이슈 발생가능성 多
    let 변수의 scope는 블록(중괄호) -> 변수 중복선언 가능성 少
 */

if(true){
    var x=10;
    let y=15;
}
console.log(x); // 사용가능 - 전역변수취급(동작은 하지만 논리적으로는 X)
//console.log(y); // 사용불가 - 지역변수취급(동작하지 않고 논리적으로도 O)

let a="홍길동"; // 전역변수 - 모든 함수나 제어문에서 접근가능
let some=function(){
    console.log(a);
    let b="이순신"; // 지역변수 - some함수 안에서만 접근가능(외부접근 불가)
}
console.log(a);
//console.log(b); // 에러발생. 지역변수를 블록 밖에서 호출하기때문에 에러



