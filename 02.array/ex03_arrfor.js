/* 배열의 반복 for문 */

let num=[1,2,3,4,5,6,7];
// 배열의 합계
let sum=0;

for(let i=0;i<num.length;i++)
{
    sum+=num[i];   
    console.log("각 배열의 수는? :",num[i]);
}

console.log("배열의 합계는 :",sum);

console.log("==============================");

// for ~ in구문
for(let i in num){
    console.log(`인덱스 ${i}, 값: ${num[i]}`);
}

console.log("==============================");
// for ~ in구문 es06

for(let value in num){
    console.log(`인덱스 ${value}, 값: ${num[value]}`);
}