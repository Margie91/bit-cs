'use strict';

function multiply(num) {
    
    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
            console.log(i + '*' + j + ' = ' + i*j);   
        }   
    }
}

multiply(12);