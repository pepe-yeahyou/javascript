/* 
정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 
soltuion 함수를 완성해주세요.

제한사항
-50000 ≤ num1 ≤ 50000
-50000 ≤ num2 ≤ 50000
입출력 예
num1	num2	result
2	3	-1
100	2	98
입출력 예 설명
입출력 예 #1

num1이 2이고 num2가 3이므로 2 - 3 = -1을 return합니다.
입출력 예 #2

num1이 100이고 num2가 2이므로 100 - 2 = 98을 return합니다.
*/


// 여기도 오답이네 왜지? 왜? 왜???????????????????
function solution(num1, num2) {
    
    if(num1>-50001&&num1<50001 && num2>-50001&&num2<50001)
    {
        let result=num1-num2;
        if(result>-50001&&result<50001){
            return result;
        }else{
            return `${num1}-(${num2})의 값의 범위는 -50000 ~ 50000 사이어야만 합니다.`
        }
    }

}
console.log(solution(100,2));
