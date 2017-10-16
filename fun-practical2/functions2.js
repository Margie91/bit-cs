'use strict';

function combineArr(arr1, arr2) {
    var newArray = [];
    var j = 0;
    var y = 0;

    for (var i = 0; i < arr1.length; i++) {
        newArray[i] = arr1[i];
        console.log(newArray);
        newArray[j] = arr2[i];
        console.log(newArray);
        j++;         
    }

    return newArray;
}

console.log(combineArr(['a','b','c'], [1,2,3]));