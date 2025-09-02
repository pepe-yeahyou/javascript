//객체 - {키:값}형태로 여러 값을 저장해놓은 구조.

let person={
    name:"sunja",
    age:20
}

console.log(typeof person);

//객체의 값 확인하기
console.log(person.name); // object.~~~ 으로 접근
console.log(person["name"]);

//객체의 값 수정하기 - 동일한 키값 변경
person.age=30;
person["age"]=31;
console.log(person.age);

//객체의 값 추가하기 - 새로운 키를 추가

//객체에는 함수도 저장될수있음
//this는 자기자신을 의미함
person.hobby=["잠자기","코딩하기"];

let people={
    name:"길동",
    sayHello: function(){
        console.log(`저의 이름은 ${this.name}입니당`);
    }
}
//people.sayhello
console.log("============================");
// 본인 이름으로 객체생성
// 키값:name,age,cm,hello함수,hobby 배열

let jang={
    name:"jang",
    age:30,
    cm:175,
    hello(){console.log("ㅎㅇ");},
    hobby:["독서","등산"]
};

console.log(jang.name);
console.log(jang.age);
console.log(jang.cm);
jang.hello();
console.log(jang.hobby);




