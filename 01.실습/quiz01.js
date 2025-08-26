//어떤수에서 - 랜덤한 값을 빼주면 음수값이 나올수 있음
//ex -5 ~ 5 사이의 랜덤한 값을 출력해줍니다.
//이 값이 언제든 절대값으롤 나오도록 3항 연산식을 세워보세요

/*  
    1. 임의의 값 2에서 -5 ~ 5 사이의 랜덤한 값을 빼는 연산식
    2. 랜덤한 값이 음수일 경우 절대값으로 보정하여 임의의 값을 제한다.
    3. 랜덤한 값이 양수일 경우 임의의 값 - 랜덤한 값을 계산한 뒤 절대값으로 보정한다.
    4. 절대값을 보정한 결과와 보정하지 않는 값을 출력하여 비교 대조한다.
*/
   
var i=2;
var a=Math.random();
var b=parseInt(a*10)-5;
var r1=b<0? Math.abs(i-(-b)) : Math.abs(i-b);
var r2=i-b;


console.log("i값:",i,"랜덤값",b);

console.log("절대값 보정O :",r1);
console.log("절대값 보정X :",r2);



// 랜덤한 임의의수 x 

var z=parseInt(a*10)-5;
var m=z<0? -z : z;

console.log("절대값 보정O :",m);
console.log("절대값 보정X :",z);


/*  
    1. 1~10까지 랜덤한 수를 생성
    2. 이 숫자가 3의 배수라면 3의 배수, 3의 배수가 아니라면 3의 배수가 아닙니다 출력
*/

var m1=parseInt(a*10)+1;
var res=m1%3===0? "3의배수" : "3의배수가 아닙니다"
console.log(m1);
console.log(res);


   