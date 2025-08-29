const matrix =[
    [1,2,3],
    [4,5,6,10,20],
    [7,8,9]
]
/* console.log(matrix[0]);
console.log(matrix[0][1]);
console.log(matrix[2][1]); */

for(var i=0;i<matrix.length;i++){
    for(var j=0;j<matrix[i].length;j++){
    console.log(matrix[i][j]);
    }
}

for(let i=0;i<matrix.length;i++){
    console.log(matrix[i]);
}

console.log("============================");
// 이름,국어,영어,수학 / 과목별 평균 구하기
let std=[
    ["kim",76,34,23],
    ["lee",30,99,76],
    ["park",76,87,54],
    ["choi",98,76,45]
]
var lan=0; //국어
var eng=0; //영어
var mat=0; //수학


for (var i=0;i<std.length;i++){
    lan+=std[i][1];
    eng+=std[i][2];
    mat+=std[i][3];

}
console.log(`국어의 합계 : ${lan}, 평균 : ${lan/std.length}`);
console.log(`영어의 합계 : ${eng}, 평균 : ${eng/std.length}`);
console.log(`수학의 합계 : ${mat}, 평균 : ${mat/std.length}`);
