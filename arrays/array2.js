var c = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

console.log(c[24]);
console.log(c[3]);
console.log(c[2][1]);

delete c[2][1];
console.log(c);

c[2][4] = 'string';
console.log(c);
