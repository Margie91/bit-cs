'use strict';

function celsiusToFahrenheit(numb) {
    if (typeof numb !== 'number') {
        return 'Please enter a temperature.'
    }
    var result = (numb * 1.8) + 32;

    return result + '°F';
}

console.log(celsiusToFahrenheit(40));

