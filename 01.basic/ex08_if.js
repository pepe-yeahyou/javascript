let point = parseInt(Math.random()*100+1);

/* if (point >= 60){
    console.log("점수는? :",point,"차가운 합격입니다.");
}else{

    console.log("점수는? :",point,"뜨거운 합격입니다.");
} */


let grade="뜨거운 합격";

if(point >= 60){
    grade = "차가운 합격"
}else{
    grade;
}

console.log("점수 :",point, "결과 :",grade);
console.log("--------let 함수의 scope----------");

if(true) {
    // 중괄호 내에 선언된 변수는 중괄호 내에서만 쓸수있음
    let name = "MR.Hong";
}
console.log(name); // 즉슨, 이건 못써먹음ㅇㅇ

