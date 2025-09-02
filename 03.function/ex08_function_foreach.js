// 개중요함 근데 좀 개념이 어렵다..
/* 
    고차함수 - 함수의 매개변수로 함수가 들어가는 유형(js가 좋아하는 문법)
    forEach - 반복을 대신함 - 첫번째는 value. 두번째는 index.
 */

let arr=[1,2,3,4,5,6,7];

// foreach(타입:(함수모형:값,인덱스:값,배열:값[]=>반환안함(return x)))

//example
/* 
mySome=(function(item,index){}); - 기본 틀

let mySome=function(item,index){
    console.log(`값:${item},인덱스:${index}`);
}
arr.forEach(mySome); // 뒤에()는 넣으면안됨. 문법적으로 에러
 */

// 한줄로도 표현이 가능..
// 한줄
//arr.forEach(function(item,index){console.log(`값:${item},인덱스${index}`);});
// 화살표함수
//arr.forEach((item,index)=>{console.log(`값:${item},인덱스${index}`);});

// index가 필요없을경우 (값만 출력가능)
arr.forEach(item=>console.log(`값: ${item}`));
// 마찬가지로 index만 표현할수있음.
arr.forEach(index=>console.log(`인덱스: ${index}`));


// map : return에 담긴 값으로 반환 -> ...?

console.log("====================================");
// map - 반환에 담긴 값으로 새로운 배열을 생성함.
// 기존 배열에 덮어쓰기 안됨(이미 정의되어있기때문)
// arr.map(function(item,index){}); - 기본 틀
/* 
let newArr=arr.map(function(item,index){
    return item*item;
});
 */
let newArr=arr.map(item=>item*item);
console.log(newArr);

console.log("====================================");
// filter - 조건에 맞는 값으로 새로운 배열을 생성함.
let newArr2=arr.filter(function(item,index){
    return item%2===0; // 짝수면 true, 홀수면 false
});

console.log(newArr2);
