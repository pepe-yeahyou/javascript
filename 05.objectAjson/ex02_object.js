//배열안에 객체가 저장되는 형태
let list=[
    {id:1,title:"hello",content:"yeah",subject:["java"]},
    {id:2,title:"bye",content:"hot",subject:["css","js"]},
    {id:3,title:"hi",content:"cold",subject:["git"]}
];
/* 
console.log(list[0].title, list[0]["subject"]);
console.log(list[1].title, list[1].subject[0]);
 */

// 배열을 반복으로 
for(let i=0; i<list.length; i++){
    console.log(list[i].id,list[i].title,list[i].content,list[i].subject);
}

let jsonstr=JSON.stringify(list[1]);
console.log(jsonstr);
