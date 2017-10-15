function joinToString(array) {
    string = '';
    for (var i = 0; i < array.length; i++) {
        if (!!array[i] === false || array[i] == Infinity) {
            string += '';
        } else {
            string += array[i];
        }
    }
    return string;
}

console.log(joinToString(['1', '2', 'please', NaN, 'work', false, 'I', Infinity, 'will', undefined, 'DIE']));