
let str="hello world javascript";

console.log(`문자열 길이 : ${str.length}`);
console.log(`index 2번째 문자열? : ${str.charAt(1)}`);

// 특정문자 기준으로 문자열 자르기
let s2=str.split("");
console.log(s2);
let s3=str.split(" ");
console.log(s3);

//특정문자의 위치 자르기
// 파라미터를 2개를 줬을때, index 번호 범위 내 출력
let s4=str.substring(6,11);
console.log(`index 6~11사이의 문자열 : ${s4}`);

// 파라미터를 1개만 줬을때 index 번호 이하 절삭처리
let s5=str.substring(10);
console.log(`index 10 미만 문자열 삭제 : ${s5}`);

// 특정 위치로 문자열 찾기
console.log("l이 처음으로 발견된 위치 :",str.indexOf("l")); 
//hello world javascript.
console.log("index 5번째 이후에 발견된 o의 위치",str.indexOf("o",5));
//문자열을 뒤에서 부터 검색(역순검색)하여 index를 반환
console.log("마지막 문자열에서 a찾기",str.lastIndexOf("a"));
//해당 문자열이 포함하고 있는지 여부 (포함 : true / 미포함 : false)
console.log("java 포함여부? ",str.includes("java"));
//해당 문자열로 시작할경우 true -> 개행문자가 존재해도 가장 앞쪽으로 조회
console.log("hell로 시작함? ",str.startsWith("hell"));  
//해당 문자열로 끝날경우 true
console.log("띠용으로 끝남? ",str.endsWith("띠용?"));


//문자열 변환
//문자열 반복("string",value) - 횟수
console.log("=".repeat(20)); 
//문자열 치환
console.log(str.replace("l","띠용")); // 최초 조회된 문자열에 대해 치환 - 전체 또는 특정범위 가능?
console.log(str.replaceAll("o","띠용!!")); // 조회된 문자열에 대해 전부 치환 
/* 
   주의 : 원본 문자열은 그대로임. 
         원본을 변환하고 싶다면 재선언
         ex) str=str.replace("l","띠용");
*/

console.log(" hello     ".trim()); // 양쪽 공백 제거 (, 아님 .임)

//대/소문자 변환
let text="Hello";
console.log(text.toUpperCase()); // 전부 대문자처리
console.log(text.toLowerCase()); // 전부 소문자처리







