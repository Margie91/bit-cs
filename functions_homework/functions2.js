function joinToString(array) {
    string = '';
    for (var i = 0; i < array.length; i++) {
        if (!!array[i] === false || array[i] === Infinity) {
            string += '';
        } else {
            string += array[i];
        }
    }
    return string;
}

console.log(joinToString([NaN, 0, 15, false, -22, '', undefined, 47, Infinity, null]));