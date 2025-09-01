/* 
function - return
 함수가 실행한 결과를 호출구문으로 돌려주는 값
*/
function add(a,b){
    return a+b;
}

let result=add(3,5); // 리턴을 받아서 저장하는 코드
console.log(`함수 실행결과 : ${result}`);
//리턴이 있는 함수는 호출문이 실행결과를 돌려받기때문에, 출력문에 한번에 쓸수있음.
console.log(`함수 실행결과 : ${add(5,5)}`);
//리턴이 있는 함수는 함수의 중첩도 가능함
console.log(`함수 실행결과 : ${add(add(5,6),7)}`);
console.log(`함수 실행결과 : ${add(add(5,6), add(7,0))}`);
let result2=add(add(1,2), add(3,5));
console.log(`함수 실행결과 : ${result2}`);

/* 
return -> 돌려주다 + 함수의 종료
return 이후의 코드는 실행되지 않음.
반드시 양의 정수값만 전달되어야 하는 함수 
*/
function some(num){
    if(num<=0){
        return; 
        /* 함수의 종료의 의미로 사용할 수 있음
        return; 키워드를 사용하면 undefined이 반환됨
        boolean 값을 반환하도록하는게 일반적임.
        */
    }
    return "전달받은 양의 정수는 "+num+"입니다";
    // console.log("이거 됨?"); // 동작하지않음
}
console.log(some(-10));

