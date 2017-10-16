'use strict';

function filterArray(array) {
    var filteredArray = [];
    var j = 0;

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            filteredArray[j] = array[i];
            j++;
        } else {
            continue;
        }
    }
    return filteredArray;
}


function maxElement(array) {
    var max = array[0];
    var filteredArray = filterArray(array);

    for (var i = 0; i < filteredArray.length; i++) {
        if (filteredArray[i] > max) {
            max = filteredArray[i];
        } 
        
    }
    return max;
}

console.log(maxElement([1, 10, 'bla', 2, 9, 'skdak', false, 7, 3, 4, undefined, 5]));