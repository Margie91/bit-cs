function isPalin(str) {
    var maybePal = "";
    str = str.toLowerCase();
    emptyStr = "";

    for(var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            continue;
        } else {
            emptyStr += str[i];
        }
    }

    for(var i = emptyStr.length - 1; i >= 0; i--) {
        maybePal += emptyStr[i];
    }

    if (maybePal === emptyStr) {
        return "This is a palindrome.";
    } else {
        return "This is not a palindrome.";
    }
}

var pal = "Ana voli Milovana";
console.log(isPalin(pal));