function reverseNum(num) {
    var n = '' + num;
    var res = "";

    for (var i = n.length - 1; i >= 0; i--) {
        res += n[i];
    }
    return parseInt(res);
}

var num = 12567;
console.log(reverseNum(num));