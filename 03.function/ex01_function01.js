// 선언적 함수는 호이스팅(당겨 호출하기)가 가능함.
/* for(var i=0;i<10;i++){
    SH();
} */


//함수의 선언
function SH(){
    console.log("Say Hello!");
}
//구구단을 출력하는 함수
function gugudan(){
    console.log("======= 2단 ========");
    
    for(let i=1; i<10; i++){
        console.log(`2 x ${i} = ${2*i}`);
    }
}
//함수를 부르는 과정 - 호출
SH();
//구구단 호출
gugudan();
