'use strict';

function arrOfDigits(number) {
    var array = [];
    var string = '' + number;

    for (var i = 0; i < string.length; i++) {
        array[i] = parseInt(string[i]);
        
    }
    return array;
}

console.log(arrOfDigits(123));
