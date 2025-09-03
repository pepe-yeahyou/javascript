/* 
1. registUser(유저객체)를 하나 생성합니다.
2. 전달된 유저객체의 name값이 2글자 이하이거나, 비어있으면 예외처리를 진행합니다.
3. 유저객체 안에 name값이 정상값이라면, 유저의 이름을 반환하는 함수를 행성.
*/
let user={name:"",addr:"서울시"};
console.log(registUser(user));

//function registUser(obj){...}
function registUser(){
    try { 
    //if(user.name.length<=2||user.name==null){ ... }
    if(user.name.length===0 || user.name.length<=2){
        // throw new Error("이름은 3글자 이상입니다.");
        console.log("name은 2글자 이상이어야 합니다.");
    }else{
        return user.name;
    }
    } catch (error) {
        console.log(error.message);
        return null;
    }
}



