// for (var i = 0; i < 15; i++) {
//     if(i % 2 === 0) {
//         console.log(i + ' is an even number.');
//     }
//     else {
//         console.log(i + ' is an odd number.');
//     }
// }

function print(str) {
    console.log(str);
}

function oddEven(num) {
    if (isNaN(num) || typeof num !== 'number') {
        print('Error, please enter a valid number.');
        return;
    } else if (num < 0) {
        num = Math.abs(num);
    } else if (num == 0) {
        print('Please enter a number bigger than zero.')
        return;
    }
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            print(i + ' is an even number.');
        } else {
            print(i + ' is an odd number.');
        }

    }
}

oddEven(12);