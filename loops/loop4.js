var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

/*for(var i = 0; i < a.length; i++) {
    for(var j = 0; j < a[0].length; j++) {

        console.log(a[i][j]);
    }
}*/

for (var index in a) {
    for (var inx in a[index]) {
        console.log(a[index][inx]);
    }
}