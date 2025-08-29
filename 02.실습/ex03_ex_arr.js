
// 1. 이름,국어,영어,수학 / 학생별 점수의 평균 구하기 (중첩)
// i=행, j=열
let std=[
    ["kim",76,34,23],
    ["lee",30,99,76],
    ["park",76,87,54],
    ["choi",98,76,45]
];
let tot=0;
for (var i=0;i<std.length;i++){
    for(var j=1;j<std.length;j++){
            tot+=std[i][j];
    }    
//    console.log("총점 : ",tot);
    avg1=tot/3;
    avg=avg1.toFixed(1);
    console.log(`${std[i][0]} : 평균 ${avg} 점`);
    tot=0;

    /*  -> 이 방법으로도 가능
     console.log(`${std[i][0]} 평균 : ${(tot/3).toFixed(1)}`);
     */

}

// 2. 가장 비싼 상품을 찾아서 출력하시오
// 결과 -> 시계 : 20000000

let pdt=[
    ["노트북",1200000],
    ["스마트폰",800000],
    ["태블릿",500000],
    ["헤드폰",300000],
    ["시계",2000000]
]
let max=0;
let dif=0;
for(var i=0;i<pdt.length;i++){
    dif=pdt[0][1];
    max=pdt[i][1];

    if(dif < max){
    console.log(`품목 : ${pdt[i]}`);
    //console.log(`최대 : ${max}`);    
    }
}


/*  -> 이방법도 있음
let product=products[0][0]; //상품명
let price=price[0][1]; //가격
for(let=0;i<product.length;i++){
if(price<product[i][1]){ product=product[i][0]; price=product[i][1]; }
}
console.log(`${product} : ${price}`);
 */