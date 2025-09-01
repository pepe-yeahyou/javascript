/*  
    함수만들기 실습
*/

/* 
문제 1: 별찍기 (레벨 1)
- 숫자를 받아서 해당 개수만큼 별을 출력하는 함수 printStar를 만들어보세요.
- 반환값이 없는 함수입니다.
 */

function printStar(num){
    console.log("문제 1: 별찍기");
    let star="";
    for(let i=0;i<=num;i++){
        for(let k=num; k>i; k--){
        star += " ";
        }
        for(let j=0; j<i; j++){
        //console.log("*");
        star += " *";
        }
        star += "\n";
    }
    

    console.log(star);
}

/* 
문제 2: 현재 시간 출력 (레벨 1)
- 현재 시간을 "현재 시간: [시간]" 형태로 출력하는 함수 showTime를 만들어보세요.
- 현재 시간은 아래 함수로 구할수 있습니다.
let now = new Date();
let hours = now.getHours();      // 시 (0-23)
let minutes = now.getMinutes();  // 분 (0-59)
let seconds = now.getSeconds();  // 초 (0-59)
- 반환값이 없는 함수입니다.
 */
 
function showTime(date){
    console.log("문제 2: 현재 시간 출력");
    let now = new Date();
    let hours = now.getHours();      // 시 (0-23)
    let minutes = now.getMinutes();  // 분 (0-59)
    let seconds = now.getSeconds();  // 초 (0-59)
    //console.log(`현재시간 : ${now}`);
    console.log(`현재시간 : ${hours}:${minutes}:${seconds}`);
}
 
/* 
문제 3: 짝수 판별 (레벨 2)
- 숫자를 받아서 짝수인지 홀수인지 판별하는 함수 isEven을 만들어보세요.
- 짝수면 true, 홀수면 false를 반환하세요.
*/
function isEven(num){
    console.log("문제 3: 짝수 판별");
    
    if(num%2===0){
        return "true";
    }else{
        return "false";
    }
}
/* 
문제 4: 원의 넓이 (레벨 2)
- 반지름을 받아서 원의 넓이를 계산하는 함수 circleArea를 만들어보세요.
- 원의 넓이 = π × 반지름² (π는 3.14159 사용)
*/
function circleArea(num){
    console.log("문제 4: 원의 넓이");
    
    let pi=3.14159
    //let circle=pi*num*num;
    return pi*num*num;
}

/* 
문제 5: 약수 개수 (레벨 3)
- 양의 정수를 받아서 약수의 개수를 세는 함수 countDiv를 만들어보세요.
- 예시: 12의 약수는 1, 2, 3, 4, 6, 12이므로 6개
 */
function countDiv(num){
    console.log("문제 5: 약수 개수");
    
    let cnt=1;
    for(let i=1;i<num;i++)
    {
        if(num%i===0){
            cnt++;
        }
    }
    return cnt;
}
/* 
문제 6: 절대값 반환 (레벨 3)
- 숫자를 받아서 절대값을 반환하는 함수 abs를 만들어보세요.
- 예시: abs(-5) → 5, abs(3) → 3
*/
function abs(num){
    console.log("문제 6: 절대값 반환");
    
    //return Math.abs(num);
/* 
    if(num <0){
        return -num;
    }else{
        return num;
    }
 */
    return num<0? -num : num
}
/* 
문제 7: 최대값 반환 (레벨 4)
- 세 개의 숫자를 받아서 가장 큰 수를 반환하는 함수 max를 만들어보세요.
- Math.max() 함수는 사용하지 마세요.
 */
function max(num1, num2, num3){
    console.log("문제 7: 최대값 반환");
/*     
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else if(num3 > num1 && num3 > num2){
        return num3;
    }
*/
    let max=num1;
    if(num2>max) max=num2;
    if(num3>max) max=num3;
    return max;
}
/* 
문제 8: 완전수 판별 (레벨 5)
- 양의 정수를 받아서 완전수인지 판별하는 함수 isPerfect를 만들어보세요.
- 완전수: 자신을 제외한 약수들의 합이 자신과 같은 수
- 예시: 6의 약수는 1, 2, 3, 6이고, 1+2+3=6이므로 완전수
 */
/* 
function isPerfect(num){
    console.log("문제 8: 완전수 판별");
    
    cnt=0;
    if(num>0){
        for(let i=1;i<=num;i++)
        {
            if(num%i===0){
                console.log(`${num}의 약수는 : ${i}`);
                cnt+=i;
                continue;
            } 
            
            /* if(num===i){
                if(cnt===num){
                    return "사용자가 입력한 "+num+" 은(는) 완전수가 맞습니다."
                }else{
                    return "사용자가 입력한 "+num+" 은(는) 완전수가 아닙니다."
                }
            } */ 
/*        }
        cnt-=num;
        if(cnt===num){
            return "사용자가 입력한 "+num+" 은(는) 완전수가 맞습니다."
        }else{
            return "사용자가 입력한 "+num+" 은(는) 완전수가 아닙니다."
        }
    }else{
        return "양의 정수를 입력하세요"
    }    
}
 */

function isPerfect(num){
    let sum=0;
    for(let i=1; i<num; i++){
        if(num%i===0){
            sum+=i;
        }
    }
    return sum === num;
    
}

//문제1
printStar(7);
//문제2
showTime(20250901);
//문제3
console.log(`숫자 4는 : ${isEven(4)} 입니다`);
//문제4
let result=circleArea(5); // 리턴을 받아서 저장하는 코드
console.log(result);
//문제5
let count=countDiv(12);
console.log(count);
//문제6
let result2=abs(-5);
console.log(result2);
//문제7
let result3=max(1234,923,321);
console.log(result3);
//문제8
let perfect=isPerfect(6);
console.log(perfect);




