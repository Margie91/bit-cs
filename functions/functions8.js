function isPrime(num) {
    if (typeof num !== 'number') {
        return 'Please enter a number.';
    } 
    if (num == 1) {
        return '1 is neither a prime nor composite number.';
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return num + ' is a composite number.';
        }
    }
    return num + ' is a prime number.';
}

console.log(isPrime(2));