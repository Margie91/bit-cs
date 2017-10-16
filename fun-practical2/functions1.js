'use strict';

function countVowels(str) {
    var string = str.toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var numOfvowel = 0;

    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (string[i] == vowels[j]) {
                numOfvowel++;
            }
        }
    }
    return numOfvowel;
}

console.log(countVowels('AEIOUAEIOUAEIOU'));