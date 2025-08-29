// 1. 이 배열의 합계와 평균을 출력
console.log('Q1. 이 배열의 합계와 평균을 출력');

let num=[10,20,30,40,50];
let sum=0;
let avg=0;
let cnt=0;

for(let i=0;i<num.length;i++){
    console.log(`${i}번째 배열의 정보 : ${num[i]}`);
    
    sum+=num[i];
    cnt=num.length;
}
avg=sum/cnt;
console.log("배열의 합계는 :",sum);
console.log("배열의 평균은 :",avg);
// console.log("배열의 평균은 :",sum/num.length);

console.log('Q2.이 배열에서 최대값, 최소값을 찾아서 출력');

// 2.이 배열에서 최대값, 최소값을 찾아서 출력
// Hint : 변수를 잘 활용하도록.
let scr=[85,92,70,96,91,60,100];


let max=0;
let min=0;
let dif=0;

/* 
let max = scr[0];
let min = scr[0]; */


for (let i=0;i<scr.length;i++){
    console.log(`${i}번째 배열의 정보 ${scr[i]}`);
    
    dif=scr[0];
        if(dif > scr[i]){
            min=scr[i];
            //console.log(`${i}번째 비교데이터 : ${dif}`)
            //console.log(`${i}번째 최소 비교값 : ${min}`)
        }
        if(dif < scr[i]){
            max=scr[i];
            //console.log(`${i}번째 최대 비교값 : ${max}`)
        }
}
//min = scr.sort();
//min1 = min[0];
/* 
for(let i=0;i<scr.length;i++){
    if(max<scr[i]){
        max=scr[i];
    }
    if(min>scr[i]){
        min=scr[i];
    }
} */


console.log("이 배열의 최대값은 :",max);
console.log("이 배열의 최소값은 :",min);


// 3. 짝수 필터링

let numb=[1,2,3,4,5,6,7,8,9,10];
let even=[];

for(let i=0;i<numb.length;i++){
    //console.log(numb[i]);
    if(numb[i]%2===0){
        even.push(numb[i]);
    }
}

console.log("Q3. 1~10까지 배열에서 짝수 필터링 :",even);


console.log('Q4. 배열의 값을 뒤집어서 reverse배열에 저장하시오');

//4. 배열의 값을 뒤집어서 reverse배열에 저장하시오
let arr=[1,2,3,4,5];
let rev=[];

for(let i=arr.length-1;i>-1;i--){
    //console.log(arr[i]);
    rev.push(arr[i]);
}
console.log(rev);

//5. target값이 배열에 포함되어 있으면, 해당 인덱스를 출력, 없으면 -1를 출력
//힌트 boolean변수를 이용
let src=['a','b','c','d','e'];
let tar='e';
let find=[];
console.log("Q5. target값이 배열에 포함되어 있으면, 해당 인덱스를 출력, 없으면 -1를 출력");
/* index 함수 쓰지말고 for문으로 구현할것.
 console.log(src.indexOf(tar)); */

for(let i=0;i<src.length;i++){
    console.log(`배열의 내용 : ${src[i]}`);
    // 값이 아니라 인덱스니까... i가 맞겠지...?
    if(src[i] === tar){
        find.push(i);
        // break;
    }
    if(src[i] !== tar)
    {
        find.push(`-1`);
    }
}

/* 
let src=['a','b','c','d','e'];
let tar='e';
let index=-1;
let bool = false;

for(let i=0;i<src.length;i++){
    console.log(`배열의 내용 : ${src[i]}`);
    if(src[i] === tar){
        index=i; // 인덱스 기록
        bool=true; // 찾음여부 체크
        break;
    }
}
if(bool){
    console.log(`${tar}의 위치는 ${index}번째 입니다.`);
}else{
    console.log(`${tar}의 위치는 없습니다`);
} */






console.log(`해당 배열에서 target 문자가 있는지? : [ ${find} ]`);

//6. word 배열의 문자열의 길이를 저장하는 wordlength배열을 만드시오.

console.log('Q6. word 배열의 문자열의 길이를 저장하는 wordlength배열을 만드시오.');

let wrd=['apple','banana','melon','grape','orange'];
let wlt=[]; //5,6,5,5,6 문자열 길이는 문자열.length

for(let i=0;i<wrd.length;i++){
    console.log(`${i}번째 문자열 : ${wrd[i]}`);
    wlt.push(wrd[i].length);
}

console.log(`각 문자열의 길이 : ${wlt}`);