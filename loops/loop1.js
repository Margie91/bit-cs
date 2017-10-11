function print(str) {
    console.log(str);
}

function isNum(num) {
    if(typeof num === 'string') {
        return false;
    } else  {
        return true;
    }
}

function sumOfDivs(num) {
    var sum = 0;
    if(!isNum(num)) {
        return print('Please enter a number.');
    } else if (num < 1) {
        return print('Please enter a number bigger than zero.');
    }
    for (var i = 0; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i;
        }
    }
    return print(sum);
}


function sumOfDivs2(min, max) {
    var sum = 0;
    if (arguments.length < 2) {
        max = arguments[0];
        min = 1;
    }
    if(!isNum(min) || !isNum(max)) {
        return print('Please enter a number.');
    } else if (min < 1 || max < 1) {
        return print('Please enter a number bigger than zero.');
    }
    for (min; min <= max; min++) {
        if (min % 3 === 0 && min % 5 === 0) {
            sum += min;
        }
    }
    
    return print(sum);
}

sumOfDivs2(50);