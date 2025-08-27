/* 
    1. 구구단 5단을 for문으로 출력(console log)
    2. 7~100까지 정수 중 7의 배수를 출력 
    3. 1~50까지 홀수의 합
    4. 100의 약수의 합 1, 100 포함
 */

    var a=5;
    var b=7;
    var c=0;
    var d=100;
    var e=0;
    console.log("1. 구구단 5단을 for문으로 출력");
    for(var i=1;i<10;i++){
        console.log(a*i);
    }
    
    console.log("2. 7~100까지 정수중에서 7의 배수를 출력");
    for(var i=7;i<101;i++){
        if(i%7===0){
            console.log(i);
        }
    }

    console.log("3. 1~50까지의 홀수의 합");
    for(var i=1;i<51;i++)
    {
        if(i%2!==0){c+=i;}
    }
    console.log(c);

    console.log("4. 100의 약수의 합");
    for(var i=1;i<101;i++)
    {
        if(d%i===0){
            e+=i;
            //console.log(i);
        }
    }

    console.log(e);



    