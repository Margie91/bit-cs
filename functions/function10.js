function getnChars(str, n) {
    if (typeof str !== 'string') {
        return 'Please enter a string and a number.'
    }
    var res = '';
    for (var i = 0; i < n; i++) {
        res += str[i];
    }
    return res + '...';
}

console.log(getnChars('Margie is a bitch', 13));