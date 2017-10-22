function hideEmail(string) {
    var indexOfmonkey = string.indexOf('@');
    var firstPart = string.slice(0, indexOfmonkey - 1);
    var secondPart = string.slice(indexOfmonkey, string.length);
    var half = firstPart.length / 2;
    return firstPart.slice(0, half) + '...' + secondPart;
}

console.log(hideEmail('margie@gmail.com'));