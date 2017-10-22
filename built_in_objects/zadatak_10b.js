function swapCases(string) {
    var result = '';

    for (var i = 0; i < string.length; i++) {
        if (string[i] == string[i].toLowerCase()) {
            result += string[i].toUpperCase();
        } else {
            result += string[i].toLowerCase();
        }
        
    }

    return result;
    
}

console.log(swapCases('tHe quIcK'));
