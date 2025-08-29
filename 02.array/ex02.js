// ... ~#20250829~


let arr3 = [1,2,3];
let arr4 = [4,5,10];

console.log("배열A :",arr3);
console.log("배열B :",arr4);

let result = arr4.concat (arr3); // 두 배열을 합친 새로운 배열을 반환
console.log("합친 배열 :",result);

// 배열의 정렬 - 오름차순 정렬
result.sort();
console.log("오름차순 정렬 :",result); 
/* 
결과 : 오름차순 정렬 : [ 1, 10, 2, 3, 4, 5 ]
 - 1. 자릿수 비교
   2. 숫자 비교
 */ 

