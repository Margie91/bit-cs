

function swapCase(string) {
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var array = string.split('');
    var result = [];
    var x = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < UPPER.length; j++) {
            if (array[i] == UPPER[j]) {
                result[x] = array[i].toLowerCase();
                x++;
            } else if (array[i] == LOWER[j]) {
                result[x] = array[i].toUpperCase();
                x++;
            }
        }
    }

    var swaped = result.join(' ');
    return swaped;
}

console.log(swapCase('The Quick Brown Fox'));
