'use strict'; 

function reverseNum(num) {
    var string = num + '';
    var result = '';
    for (var i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return parseInt(result);
}


var x = 12345;

console.log(reverseNum(x));
console.log(typeof reverseNum(x));