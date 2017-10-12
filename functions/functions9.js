function replaceSpace(str, n) {
    if(arguments.length < 2) {
        n = '-';
    }
    var res = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            res += n;
        } else {
            res += str[i];
        }
        
    }
    return res;
}

console.log(replaceSpace(' My random string', '*'));