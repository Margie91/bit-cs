function lastOcc(str, n) {
    var position = 0;
    if (typeof str === 'undefined' && typeof str === 'undefined') {
        return 0;
    }
    for (var i = str.length-1; i>=0; i--) {
        if (str[i] == n) {
            position = i + 1;
            return position;
        }

    }
    return -1;
}


console.log(lastOcc('marijam', 'm'));