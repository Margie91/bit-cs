'use strict';

function celsiusToFahrenheit(numb) {
    if (typeof numb !== 'number') {
        return 'Please enter a temperature.'
    }
    var result = (numb * 1.8) + 32;

    return numb + '°C is ' + result + '°F';
}

console.log(celsiusToFahrenheit(40));

