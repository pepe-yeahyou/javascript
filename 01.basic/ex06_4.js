// 논리연산자

//&&, ||
let a=true;
let b=false;

console.log("a는 true, b는 false");

console.log("&&의 결과:",a&&b);
console.log("&&의 결과:"+(a&&b));
console.log("||의 결과:",a||b);
console.log("a,b !의 결과:",!a,!b);


let x=10;
console.log(x%2===0);


//어떤수가 3의 배수이거나 4의 배수인경우 - 조건식

let y=120;
console.log("y값이"+y+"일때 3의 배수이거나 4의 배수인지?");
console.log(y%3===0&&y%4===0);
