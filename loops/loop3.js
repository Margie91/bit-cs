var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
// var y = '';

// for (var i = 0; i < x.length; i++) {

//     y = y + x[i] ;
// }
//  console.log(y);

function isNum(num) {
    if(isNaN(num) || typeof num === 'string') {
        return false;
    } else  {
        return true;
    }
}

function makeaString(arr) {
    var string = '';
    if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            string = string + arr[i];
        }
        return console.log(string);
    } else if (isNum(arr)) {
        return console.log(string + arr);
    } else {
        return console.log(arr);
    }
}

makeaString([1, 2, 3]);