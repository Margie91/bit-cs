function concat(string, n) {
    if (arguments.length < 2) {
        return string;
    }
    var result = '';
    for (var i = 0; i < n; i++) {
        result += string;
    }
    return result;

}

console.log(concat('ha'));

