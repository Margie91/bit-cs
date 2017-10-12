function toNumArr(str) {
    var array = [];

    for (var i = 0; i < str.length; i++) {
        if (typeof str[i] === 'number') {
            array[i] = str[i];
        } else {
            
        }
    } 
    return array;
}

console.log(toNumArr('born in 1991'));