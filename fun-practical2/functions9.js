'use strict';

function findMedian(array) {
    var result = 0;

    if (array.length % 2 !== 0) {
        result = array.length / 2;
        return array[parseInt(result)];
    } else {
        result = array.length / 2;
        return (array[result-1] + array[result])/2;
    }

}

console.log(findMedian([1, 3, 5, 8, 9, 10]));