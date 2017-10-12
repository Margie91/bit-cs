function convertToArr(str) {
    var array = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            array[i] = null;
        } else {
            array[i] = str[i];
        }
        
    }
    return array;
}

console.log(convertToArr('M a r i j a'));