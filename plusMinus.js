let arr = [1, 2, 3, 0, -2, -4]

function plusMinus(arr) {

    if(arr.length > 100 || arr.length <= 0) return;

    let arrSize = arr.length;
    let positives = 0;
    let negatives = 0;
    let zeros = 0;

    arr.forEach(number => {
        if(number < -100 || number > 100) return;

        if(number == 0) {
            zeros ++;
        }else if (number > 0){
            positives++;
        } else{
            negatives++;
        }
    })

    console.log((zeros/arrSize).toFixed(6) + "\n" + (positives/arrSize).toFixed(6) + "\n" + (negatives/arrSize).toFixed(6));
}

plusMinus(arr);
