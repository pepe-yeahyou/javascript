//예외생성하기

function divide(a,b){
    
    //a를 b로 나눈 몫을 반환하는 함수
    //b가 0이면 안됨 
    try {
        if(b===0){
            throw new Error("분모에 들어갈 b는 0이 될수 없습니다."); //예외 강제생성            
        }
        if(typeof a!=='number' || typeof b!=='number'){ // 변수 a와 b의 type체크
            throw new Error("매개변수는 숫자가 입력되어야 합니다.")
            }
        return a/b;
    } catch (error) {
        console.log(error.message); // 에러의 메시지를 출력함
        return null;
    } 
}
console.log(divide(10,0));
console.log(divide(10,1));
console.log(divide("a",1));
console.log(divide("a","c"));
