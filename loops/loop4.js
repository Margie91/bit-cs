var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
var b = [1, 'Abc', [3, 2, 1], 3, 4, 5];

/*for(var i = 0; i < a.length; i++) {
    for(var j = 0; j < a[0].length; j++) {

        console.log(a[i][j]);
    }
}*/

// for (var index in a) {
//     for (var inx in a[index]) {
//         console.log(a[index][inx]);
//     }
// }

function printAnArray(arr) {
    if (!Array.isArray(arr)) {
        return console.log('Please enter an array.');
    }
    for (var i in arr) {
        if (Array.isArray(arr[i])) {
            for (var j in arr[i]) {
                console.log(arr[i][j]);
            }
        } else {
            console.log(arr[i]);
        }
    }
}

printAnArray(b);