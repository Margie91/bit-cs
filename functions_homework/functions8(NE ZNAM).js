function findAword(string, word) {
    var count = 0;
    var temp = '';

    for (var i = 0; i < string.length; i++) {
        if (string[i] == word[0]) {
            for (var j = 0; j < word.length; j++, y++) {
                if (string[i + 1] == word[j])
                temp += word[j];
            }
        }
        
    }
}

