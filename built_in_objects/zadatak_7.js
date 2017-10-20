function padding(string, padd,leftORright) {
    var num = padd - string.length;

    if(leftORright == "left"){
        var padded = string.padStart(num);
    }else {
        padded = string.padEnd(num);
    }
    return padded;
}

console.log(padding("foofooo", 20, "left"));