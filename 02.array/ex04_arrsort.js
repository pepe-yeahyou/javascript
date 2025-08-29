/* // 변수의 swap
let x=100;
let y=54;
// x와 y의 변수를 swap하려면 변수 1개를 추가해야함.
let tmp=0;

tmp=x; // x=100, y=54, tmp=100
x=y; // x=54, y=54, tmp=100
y=tmp; // x=54, y=100, tmp=100
console.log(`x값 : ${x}, y값 : ${y}, tmp값 : ${tmp}`); */


/* sorting  - 7개정도의 정렬이 있음 */
// 선택정렬
let arr=[100,64,30,22,54,88,76];
let sort=[];
/*  첫번쨰 회전 : 22 100 64 30 54 88 76
    두번째 회전 : 22 30 100 64 54 88 76
    세번째 회전 : 22 30 54 100 64 88 76
    네번째 회전 : 22 30 54 64 100 88 76
    ...

*/

// 바깥반복문을 타겟index, 안쪽반복문을 비교할 index
for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j< arr.length; j++)
        if(arr[i]>arr[j]){ 
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
}
console.log(arr);
