/* 자동형변환 -> 연산시, 자동 타입변환 */


let num = 10 + 3.14;
console.log(num);
console.log(typeof num);

/* 사칙연산 중 문자열이 섞인 타입 +에 대해서만 문자열로 자동 형변환 됨. */

let text = "10" + 3.14 + 5;
console.log(text); // 문자열은 가장 강한 타입 - 문자열에 더해지면 모두 문자가 됨.
console.log(typeof text);

let text2 = 3.14 + 5 + "10";
console.log(text2);

let num2 = "5" + 3;
console.log(num2);

/* 
 명시적 형변환  - 강제로 타입을 변경
 parseInt, parseFloat 
*/

let result1 = "5" + 1;
console.log(result1);

let result2 = parseInt("5")+ 1;
console.log(result2);

// parseint / parsefloat에 string이 할당될 경우 nan이 반환됨. *Not a Number.
let result3 = parseInt("ㅇㅇㅇ")+ 1;
console.log(result3);

console.log(parseInt("3.14")); // 정수 처리
console.log(parseFloat("3.14")); // 실수 처리

console.log(5 + ""); // 숫자 -> 문자열 - 빈 문자열을 더하면 됨



