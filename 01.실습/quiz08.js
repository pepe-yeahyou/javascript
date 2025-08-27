/* 
    문제1 100까지의 수 중에서 3의 배수이면서 4의 배수인 것을 출력

    문제2 524의 약수의 개수를 구하세요

    문제3 100까지의 수 중에서 9의 배수의 합계
*/


let i=1;
let j=0;
let k=2;
let a=524;
let cnt=0; 
let sum=0;


console.log(`Q1. 100까지의 수 중에서 3의 배수이면서 4의 배수인 것\n`);
while(i<101){    
    if(i%3===0 && i%4===0){
    console.log(i);
    }
    i++;
}

console.log(`Q2. 524의 약수의 개수를 구하세요`);
while(k<a){
    if(a%k===0){
        cnt+=1;
        console.log("약수는 :",k,"입니다");
    }
    k++;
}
// 1과 자기자신을 포함하려면 초기값과 최대값의 값을 수정

console.log("약수의 개수는 :",cnt);

console.log(`Q3. 100까지의 수 중에서 9의 배수의 합계를 구하세요`);


while(j<101){
    if(j%9===0){
        sum+=j;
    }
    j++;
}

console.log(sum);