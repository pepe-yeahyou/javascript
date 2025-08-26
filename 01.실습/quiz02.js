/* 
    1. "사용자"에게 "바구니의 크기"를 입력받음.
    2. 그 다음에 "사과의 개수"를 입력받음.
    3. 사과의 개수와 필요한 바구니의 개수를 출력. ???
    ex) 바구니의 크기=10, 사과의 개수가 151개일경우 
        바구니가 필요한 개수는 16개
        바구니의 크기=10 사과의 개수 -> 필요한 바구니 15개
    
*/


let box=prompt("바구니의 크?기를 입력하세요.");
let app=prompt("사과의 개?수를 입력하세요");


let req=parseInt(app%box)===0? parseInt(app/box) : parseInt(app/box)+1;

document.write("사과의 개?수는 :",app,"개이고, 바구니의 크?기는 :",box,"입니다 <br>");
document.write("필요한 바구니의 개수는 ",req,"개 입니다.");

