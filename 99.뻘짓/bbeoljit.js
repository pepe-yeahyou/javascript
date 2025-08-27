//  bbanjjak bbanjjak diamond


for (var i = 0; i < 10; i++) {
    for(var z=0;z<3;z++){

    for (var j = 10; j > 0; j--) {
        if (i <= j) {
            process.stdout.write(" ");
                } else {
            process.stdout.write("*");
        }
    }

    for (var k = 0; k < 10; k++) {
        if (i > k) {
            process.stdout.write("*");
                } else {
            process.stdout.write(" ");
        }
    }
    }

    process.stdout.write("\n");
}


for (var l = 0; l < 10; l++) {
    for(var z=0;z<3;z++){

    for (var m = 0; m < 10; m++) {
        if (l < m) {
            process.stdout.write("*");
                } else {
            process.stdout.write(" ");
        }
    }

    for (var n = 10; n > 0; n--) {
        if (l >= n) {
            process.stdout.write(" ");
                } else {
            process.stdout.write("*");
        }
    }
}
    process.stdout.write("\n");
}


