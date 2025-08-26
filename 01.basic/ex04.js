
// 데이터 타입(각 변수들은 암묵적으로 데이터에 대한 종류를 가지고 있음)

let name = "홍길동"; // type string 
let age = 20; // type number (integer)
let km = 55.14; // type number (float, double..)


console.log(name + "의 나이는" + age + " 살이고, 마라톤 최대 기록은 " + km + "km입니다");

//boolean -> true / false값만 할당 가능

let bool = true;
bool = false;

console.log("거짓은 영어로 " + bool);

/* null - 변수 선언은 했지만, 값을 할당하기 싫을때 나타냄
code runner에서 document 메서드를 사용할수 없다고함. 
let x = document.getElementById("이런건 화면에 없어!")
console.log(x); */

// undefine - 변수선언 후 값을 할당하지 않은 경우 발생
let a;
console.log(a);

// 배열
let arr = []; 
// 객체
let obj = {};

// 변수의 타입확인이 필요할경우 typeof 키워드로 확인 가능
/* console.log(typeof name);
console.log(typeof age);
console.log(typeof km);
console.log(typeof bool);
console.log(typeof a);
console.log(typeof arr);
console.log(typeof obj);
 */



