
function multiply(a) {
    return a * 2;
}

function square(a) {
    return a * a;
}

function multAndSquare(a, b ,c, d, e, myFun, otherFun) {
    var array = [];

    for (var i = 0; i < arguments.length - 2; i++) {
        array[i] = otherFun(myFun(arguments[i]));
    }
    return array;
}

console.log(multAndSquare(2, 3, 4, 5, 6, function (a) { return a * 2; }, function (a) { return a * a; } ));

// console.log(multAndSquare(2, 3, 4, 5, 6, multiply, square));



