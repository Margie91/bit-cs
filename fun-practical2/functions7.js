'use strict';

function maxElement(array) {
    var filteredArray = [];
    var j = 0;
    var max = 0;

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            filteredArray[j] = array[i];
            j++;
        } else {
            continue;
        }
    }

    for (var i = 0; i < filteredArray.length; i++) {
        if (filteredArray[i - 1] < filteredArray[i]) {
            max = filteredArray[i]
        } else {
            continue;
        }
        return max;
    }

}

console.log(maxElement([1, 'bla', 2, 'skdak', false, 3, 4, undefined, 5]));