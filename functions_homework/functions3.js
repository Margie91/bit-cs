function filterArray(array) {
    var newArr = []
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        if (!!array[i] === false) {
            continue;
        } else {
            newArr[j] = array[i];
            j++;
        }

    }
    return newArr;
}

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(filterArray(array));