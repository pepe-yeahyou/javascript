/* 
    매개변수로 배열을 받고, 배열을 반환하는 함수
    매개변수 -> [1,2,3,4,5];
    반환 -> [1,3,5];
 */


function getNum(arr){
    //배열을 반복해서 홀수인 경우에만 새로운 열에 배열에 추가
    let newArr=[];

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===1){ // 홀/짝 구분
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i+1]);
        }
    }
    return newArr;
}

new play=getNum([1,2,3,4,5,6]);
console.log(play);
 