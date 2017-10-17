function a(a, b) {
    var add = a + b;
    return function (a, b) {
        return add + (a * b);
    }
}

var test = a(2,2);

console.log(test(3,3));