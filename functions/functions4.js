function letterCount(str, n) {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == n) {
            result++;
        }
    } 
        return result;
}

console.log(letterCount('Marija Nikolic', 'i'));