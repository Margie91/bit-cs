'use strict';

function rotateArray(array, num) {
    var result = [];
    var j = 0;

    for (var i = num; i < array.length; i++) {
        result[j] = array[i];
        j++;
    }

    for (var i = 0; i < num; i++) {
        result[j] = array[i];
        j++;
    }
    return result;

}

var array = [1, 2, 3, 4, 5, 6];

console.log(rotateArray(array, 5));