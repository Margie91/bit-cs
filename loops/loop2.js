var arr1 = [2, 4, 6, 8];

var sum = 0;
var prod = 1;

for(var i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}

console.log(sum);

for(var i = 0; i < arr1.length; i++) {
    prod *= arr1[i];
}

console.log(prod);