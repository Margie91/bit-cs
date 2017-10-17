'use strict';

var BMI = function(weight, height) {

    var bmiIndex = weight / (height * height);

    if (bmiIndex < 15) {
        return 'Your body BMI is ' + bmiIndex + '. You are starving!'
    } else if (bmiIndex < 17.5) {
        return 'Your body BMI is ' + bmiIndex + '. You are anorexic!'
    } else if (bmiIndex < 18.5) {
        return 'Your body BMI is ' + bmiIndex + '. You are underweight!'
    } else if (bmiIndex >= 18.5 && bmiIndex < 25) {
        return 'Your body BMI is ' + bmiIndex + '. You are at ideal bodyweight!'
    } else if (bmiIndex >= 25 && bmiIndex < 30) {
        return 'Your body BMI is ' + bmiIndex + '. You are overweight!'
    } else if (bmiIndex >= 30 && bmiIndex < 40) {
        return 'Your body BMI is ' + bmiIndex + '. You are obese!'
    } else {
        return 'Your body BMI is ' + bmiIndex + '. You are morbidly obese!'
    }

}

console.log(BMI(65, 1.91))