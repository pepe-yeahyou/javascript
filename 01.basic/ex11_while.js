
let i=1; // 초기값
let result=0; // 값을 누적할 변수는 반복문 밖에 선언
while(i<=10){
    console.log(result);
    // result=result+i;
    result+=i; // 같은의미
    i++; // i값을 증가
}
console.log(result);
