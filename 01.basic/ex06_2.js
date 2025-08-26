
// 비교연산자

var a=5;
var b=3;

console.log("단순 비교연산자")
console.log(a==b); //f
console.log(a!=b); //t
console.log(a>=5); //t
console.log(a<10); //t
console.log(a<=3); //f
console.log(a>5); //f

// js에만 있는 연산자 ===, !==... 이거 처음보는거;;


let x="5";
let y=5;


console.log("비교연산자 ==, ===의 차이 ")
// 값만 비교 (문자열5와 숫자5, 값은 동일한 5라 true)
console.log("==:",x==y); 
// 값 + 타입 비교 (문자열5와 숫자5, 값은 동일하지만 타입이 다름. false) 
console.log("===:",x===y); 
console.log("!=:",x!=y);
console.log("!===:",x!==y);

//undefine과 null의 비교
let c;
let d=null;

console.log("undefine <> null의 비교연산")
console.log(c==d);
console.log(c===d);
console.log(c!=d);
console.log(c!==d);


// 대입연산자
var e=5;
e+3;
console.log(e);