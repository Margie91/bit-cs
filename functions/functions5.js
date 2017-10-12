function firstOcc(str, n) {
    var position = 0;
    if (typeof str === 'undefined' && typeof str === 'undefined') {
        return 0;
    }
    
    for (var i = 0; i < str.length; i++) {
        if (str[i] == n) {
            position = i + 1;
            return position;
        }

    }
    return -1;

}

console.log(firstOcc('salalalalal', 'l'));