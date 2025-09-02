/* 
json (javascriptobjectnotation)
자바스크립트 오브젝트 표기법(문자열)
네트워크상 데이터 송/수신시 사용하는 "표준문법"
*/
let obj={name:"김꺽정",age:20};
//let js=JSON.stringify(obj);
//console.log(js);

//매우 불편. 그러므로 손가락이 고생하기싫으면 JSON 써먹자
let json='{"name":"김꺽정","age":20}';
//console.log(json);

//오브젝트 <> json 형변환 : JSON.stringify() 매우 중요. 숙지
console.log(`object -> JSON : ${JSON.stringify(obj)}`); // 오브젝트 -> JSON
console.log(`JSON -> object : ${JSON.parse(json)}`); // JSON -> 오브젝트

//JSON 데이터는 키, 모든 문자열 값이 ""로 묶여있어야한다. 그렇게 않으면 syntax error qkftod
//let result3=JSON.parse('{addr: "서울"}'); // 에러
//console.log(result3);
