
// for (var i = 0; i <= 100; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

function isNum(num) {
    if (typeof num !== 'number') {
        return false;
    } else {
        return true;
    }
}

function fizzBuzz(num) {
    if (isNum(num)) {
        for (var i = 0; i <= num; i++) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log('Fizz');
            } else if (i % 5 === 0) {
                console.log('Buzz');
            } else {
                console.log(i);
            }
        }

    } else {
        return console.log('Please enter a number.');
    }
}

fizzBuzz(100);