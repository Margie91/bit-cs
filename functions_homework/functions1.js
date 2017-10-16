'use strict';
function insertString(string1, string2, position) {
    if (position == 0 || position !== 'number') {
        position = 1;
    }
    var result = '';
    for (var i = 0; i < string1.length; i++) {
        if (i == position - 1) {
            for (var j = 0; j < string2.length; j++) {
                result += string2[j];
            }
        }
        result += string1[i];

    }
    return result;
}

console.log(insertString('Mystring', 'JS'));