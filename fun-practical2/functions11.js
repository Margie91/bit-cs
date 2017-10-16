'use strict';

function firstMiddleLast(array) {
    var first = 0;
    var middle = 0;
    var last = 0;

    if (array.length % 2 !== 0) {
        first = array[0];
        last = array[array.length - 1];
        middle = array[parseInt(array.length / 2)];
        return 'First element is ' + first + ', middle is ' + middle + ' and last is ' + last;
    } else if (array.length % 2 == 0) {
        first = array[0];
        last = array[array.length - 1];
        return 'First element is ' + first + ' and last is ' + last;
    } else {
        return array;
    }
} 

console.log(firstMiddleLast([1, 2, 6, 4, 3]));