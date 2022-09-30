function staircase(n) {
    if (n <= 0 || n > 100) return;

    var line = "";
    let amountSpace = n-1;
    let amountHash = n-amountSpace;

    for(i=0; i<n; i++){
        if(n == 1) {
            line += "#";
            console.log(line);
            return;
        }

        for(j=1; j<=amountSpace; j++) {
            line += " ";
        }

        for(k=1; k<=amountHash; k++){
            line += "#";
        }

        line += "\n";
        
        amountSpace --;
        amountHash = n-amountSpace;
    }
        
    console.log(line);
}

staircase(5);
