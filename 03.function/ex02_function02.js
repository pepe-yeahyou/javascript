//parameter - 함수가 전달받는 변수값
//parameter는 여러개 선언이 가능함.
function alcohol(name, age){
    //console.log("안녕하세요",name,"님 반갑읍니다.");
    console.log(`안녕하세요. ${name}님, ${age}년 동안 숙성되었읍니다.`);    
}

alcohol("앱솔루트", 12);
alcohol("발렌타인", 18);
alcohol("로얄살루트", 25);
/*  
parameter가 일치하지 않더라도 호출은 됨(undefined)
하지만 parameter는 정확히 맞춰서 전달하는게 기본임.
*/
alcohol("소주"); 

// 구구단 수를 매개변수로 전달받아 출력하는 함수
function gugudan(num){
    console.log(`${num}단 입니다.`)
    for(let i=1;i<10;i++)
    console.log(`${num} x ${i} = ${num*i}`);
}

gugudan(12345789);

