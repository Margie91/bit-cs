'use strict';

function lastElement(array, num) {
    var result = [];
    var last = array.length - num;
    var j = 0;

    for (var i = last; i < array.length; i++) {
        result[j] = array[i];
        j++;
    }

    return result;
}

var arr = [7, 9, 5, 6, 0, -2];

console.log(lastElement(arr, 2));