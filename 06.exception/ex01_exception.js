/* 
예외처리 - 예외(에러)가 발생했을때, 프로그램의 흐름을 정상으로 처리하는 과정
 */



try {
    let str='{name:"이길동"}'
    let obj=JSON.parse(str); // 에러발생. 중단
    console.log(obj);
    
} catch (error) {
    //예외가 발생했을때 처리할 문장
    console.log(error,"JSON 타입이 아닙니다");
} finally { //옵션 - 에러가 발생하든 발생하지 않든 무!적!권! 발생
    console.log("무조건 실행되는 문장");
    
}

console.log("프로그램 정상 종료!");
