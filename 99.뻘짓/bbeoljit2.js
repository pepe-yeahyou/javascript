/*  
    1. 사용자에서 임의의 값을 입력받아 -5 ~ 5 사이의 랜덤한 값을 빼는 연산식
    2. 랜덤한 값이 음수일 경우 절대값으로 보정하여 임의의 값을 제한다.
    3. 랜덤한 값이 양수일 경우 임의의 값 - 랜덤한 값을 계산한 뒤 절대값으로 보정한다.
    4. 절대값을 보정한 결과와 보정하지 않는 값을 출력하여 비교 대조한다.
*/
   

let p=prompt("숫자를 입력하세요, 어떤 숫자를 입력하더라도, 1~10사이의 값을 출력합니다..");

// var i = (p<10) ? p : p%10;
// var p<10? i=p : i=p%10;
var a=Math.random();
var b=parseInt(a*10)-5;
var r1=b<0? Math.abs(i-(-b)) : Math.abs(i-b);
var r2=i-b;


console.log("i값:",i,"랜덤값",b);

console.log("절대값 보정O :",r1);
console.log("절대값 보정X :",r2);


document.write(p);