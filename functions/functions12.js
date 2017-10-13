function toNumArr(str) {
    var array = [];
    var j = 0;

    for (var i = 0; i < str.length; i++) {
        array[j] = parseInt(str[i]);
        if (isNaN(array[j]) == false) {
            j++;
        }
    }
    return array;
}
console.log(toNumArr('born in 1991'));