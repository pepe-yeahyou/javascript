//즉시실행함수 - 일반함수 / 즉시실행함수 비교


//일반함수
function first(){
    console.log("first 함수");
}
function second(){
    console.log("second 함수");
}


// 즉시실행함수
/* 
    즉시실행함수 사용이유
    1. 코드의 구조화 - 함수단위로 묶음
    2. 화면에서 초기에 가동되는 함수를 호출할 용도

 */
(function(msg){
    console.log(msg);
    first();
    second();
})("즉시실행함수 실행"); // 끝에 ();는 호출임.


