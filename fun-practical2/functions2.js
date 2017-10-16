'use strict';

function combineArr(arr1, arr2) {
    var newArray = [];
    var j = 0;
    var newLength = arr1.length + arr2.length;

    for (var i = 0, x = 0; i < newLength; i++) {
        if (i % 2 == 0) {
            newArray[i] = arr1[j];
            j++;
        } else {
            newArray[i] = arr2[x];
            x++;
        }
    }
    return newArray;
}

var arr1 = ['a', 'b', 'c'];
var arr2 = [1, 2, 3];

console.log(combineArr(arr1, arr2));
