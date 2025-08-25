// 99dan
for (var i=1; i<10; i++){
    for(var j=1; j<10; j++){
        var result=i*j;
        // process.stdout.write(String(i)+"*"+String(j)+"="+String(result)+" ");
        process.stdout.write(`${i}*${j}=${result} `);
        if (j==9){
            process.stdout.write("\n");
        }
    }   
}