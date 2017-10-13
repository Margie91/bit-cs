function yearsUntilRetire(year, sex) {
    if (typeof year !== 'number' || arguments.length < 2) {
        return 'Please enter a year of birth and sex.';
    }

    sex = sex[0].toLowerCase();
    var margin;

    switch (sex) {
        case 'm':
            margin = 65;
            break;
        case 'f':
            margin = 60;
            break;
        default:
            return 'Please enter m or f for sex.'
    }
    var age = yearOld(year);
    var result = margin - age;

    if (result <= 0) {
        return 'The person is already retired';
    }
    return result + ' years until retirement.';
}

console.log(yearsUntilRetire(1991, 'female'));

function yearOld(yearOfbirth) {
    
    return 2017 - yearOfbirth;
    
}