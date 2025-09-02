/* 
1. palindrome 매개변수로 String 값을 받아, 회문 여부를 검사하는 함수입니다.
2. 회문: 똑바로 읽으나 거꾸로 읽으나 똑같은 단어나 문장.
3. ex) 다시 합창 합시다, 다 같은 것은 같다, 아 좋다 좋아 등
4. 문장은 공백을 포함하여 받을 수 있습니다.
5. 회문이라면 true, 아니라면 false 를 리턴합니다.
6. palindrome 함수를 작성하세요.
힌트 : 모든 공백제거, 한글자씩 잘라서 붙이기
*/
// 1st
/* 
function palindrome(param){
    param=param.replaceAll(" ","");
    let sum="";
    for(let i=param.length-1;i=>0;i--){
        sum+=param.charAt(i);
    }
    return param===sum;
}

console.log(palindrome("다시 합창 합시다"));
 */
// 2nd
function palindrome(param){
    //let r=param.replaceAll(" ","")
    //공백제거,문자자르기,문자뒤집기,문자합치기
    //param.replaceAll(" ","").split("").reverse().join("");
    let word=param.replaceAll(" ",""); // 공백제거
    return word===word.split("").reverse().join(""); //문자자르기,문자뒤집기,문자합치기
    //let r2=r.split("");
    console.log(word);
    
    //return param === param.replaceAll(" ","").split("").reverse().join("");
    
}
console.log(palindrome("다시 합창 합시다"));

