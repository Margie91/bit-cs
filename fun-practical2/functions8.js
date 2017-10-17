'use strict';

function findMin(array) {
    var min = array[0];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    } 
    return min;
}

function findMax(array) {
    var max = array[0];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function maxAndMin(array, fun1, fun2) {
    var max = fun1(array);
    var min = fun2(array);
    var result = [];

    result[0] = max;
    result[1] = min;

    return result;

}

console.log(maxAndMin([10, 5, 8, 16, 2, 3, 15, 4], findMax, findMin));