
// 삼항연산자
var age1=20;
var age2=40;

var result=age1>=40? "영퐁티" : "엠지"
console.log("당신1은 :",result,"입니다");

var result=age2>=40? "영퐁티" : "엠지"
console.log("당신2은 :",result,"입니다");

// 프로그램에는 랜덤한 값을 만드는 경우가 필요.
ran=Math.random(); // 0이상 1미만의 랜덤한 실수값을 만들어줌
// console.log(parseInt(ran*100));

var p=parseInt(ran*100);
var result=p>=40? "영퐁티" : "엠지"
console.log("당신의 나이는 :",p,"살이고",result,"입니다");


let ran2=parseInt(Math.random()*10); 
console.log(ran2);
let r = ran%2 === 0? "홀" : "짝";
console.log("홀짝사다리 ㄱㄱ?",ran2,"결과값 :",r);