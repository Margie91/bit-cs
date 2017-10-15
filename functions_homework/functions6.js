function createArray(numbOfelements, element) {
    if (arguments.length < 2) {
        element = null;
    }

    var array = [];
    for (var i = 0; i < numbOfelements; i++) {
        array[i] = element;
    }

    return array;
}

console.log(createArray(6, 0));