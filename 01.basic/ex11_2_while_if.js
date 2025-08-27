/* 
    반복문 안에서 조건식
    x까지의 수 중 짝수들의 합계
 */

let i=2;
let total=0;

/* while(i<=100)
{
    if(i%2===0){
        total+=i;
    }
    i++;
}*/

while(i<=100){
    total+=i;
    i+=2;
}

console.log(`1~100가지 수 중에서 짝수의 합은 ${total}`);