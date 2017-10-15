function filterArray(array) {
    var newArray = []
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        if (!!array[i] === false) {
            continue;
        } else {
            newArray[j] = array[i];
            j++;
        }

    }
    return newArray;
}

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(filterArray(array));