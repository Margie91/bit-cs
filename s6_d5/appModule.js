var addValues = function(a, b) {
    return a + b;
}

var doSomethingVerySlow = function (callback) {
    setTimeout(function () {
        callback('done');
    }, 1000)
}


module.exports.addValues = addValues;
module.exports.doSomethingVerySlow = doSomethingVerySlow;