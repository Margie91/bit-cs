// var sum = 0;
// var i = 0;

// while (i <= 20) {
//     sum = sum + i*i;
//     i++;
// }

// console.log(sum);

function isNum(num) {
    if (typeof num !== 'number') {
        return false;
    } else {
        return true;
    }
}

function sumOfSquares(num) {
    var sum = 0;
    var i = 0;
    if (isNum(num)) {
        if (num < 0) {
            num = Math.abs(num);
        }
        while (i <= num) {
            sum += i * i;
            i++;
        }
    } else {
        return console.log('Please enter a number.')
    }
    return console.log(sum);
}

sumOfSquares(null);