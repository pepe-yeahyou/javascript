function some(){
    console.log("say hello!");
}

let x=some;
console.log(x);

x(); // x를 함수처럼 사용이 가능해짐



let sayHello = function(){ //익명함수
    console.log("say hello!!");
}
sayHello(); // 익명함수는 호이스팅이 안됨. 반드시, 함수선언 후 호출.


// 두 수의 덧셈을 반환하는 익명함수
let add = function(a,b){
    return a+b;
}

let multi=function(a,b){
    return a*b;
}

let devide=function(a,b){
    return a/b;
}

console.log(add(3,5));
console.log(multi(3,5));
let dev=devide(5,3);
console.log(dev.toFixed(2));

// 즉시실행함수
(function(name){
    console.log(`안녕하세요 ${name}님`);
})("Pepe");