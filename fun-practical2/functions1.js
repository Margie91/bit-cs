'use strict';

function countVowels(str) {
    var string = str.toLowerCase();
    var vowels = 0;

//probaj sa loop-om!!

    for (var i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] === 'i' || string[i] == 'o' || string[i] == 'u') {
            vowels++;
        }
        
    }

    return vowels;

}

console.log(countVowels('MARIJA'));