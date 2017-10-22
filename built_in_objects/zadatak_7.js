function padding(string, padd, leftORright) {
    var result;

    if (leftORright == "left") {
        return result = string.padStart(padd);
    } else if (leftORright == 'right') {
        return result = string.padEnd(padd);
    } else {
        return 'Left or right?'
    }
    
}

console.log(padding("foofooo", 20, "right"));