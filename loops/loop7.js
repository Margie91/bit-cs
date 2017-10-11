var grades = [80, 77, 88, 95, 68];
var students = ["David", "Marko", "Dany", "John", "Thomas"];
var grades1 = [
    ["David", 80],
    ["Marko", 77],
    ["Dany", 88],
    ["John", 95],
    ["Thomas", 68]
];
// var sum = 0;
// var avg = 0;

// for (var i in grades1) {
//     for (var j in grades1[i]) {
//         if (typeof grades1[i][j] !== 'number') {
//             continue;
//         } else {
//             sum += grades1[i][j];
//         }
//     }
// }


function avgGrade(arr) {
    var sum = 0;
    var avg = 0;
    var res = '';
    for (var i in arr) {
        for (var j in arr[i]) {
            if (typeof arr[i][j] !== 'number') {
                continue;
            } else {
                sum += arr[i][j];
            }
        }
    }
    avg = sum / arr.length;
    res += 'Average score is ' + avg + ', which is equivalent to grade: ' + gradeMe(avg);
    return res;
}


function gradeMe(score) {
        if (score < 60) {
            return "F";
        } else if (score < 70) {
            return "D";
        } else if (score < 80) {
            return "C";
        } else if (score < 90) {
            return "B";
        } else if (score <= 100){
            return "A";
        } else {
            return 'Error';
        }
}

console.log(avgGrade(grades1));

// for (var i = 0; i < grades1.length; i++) {
//     for (var j = 0; j < grades1[i].length; j++) {
//         if (j == 1) {
//             sum += grades1[i][j];
//         }
//     }

// }

// console.log(sum);

// for (var i = 0; i < grades.length; i++) {
//     if (grades[i] < 60) {
//         console.log(students[i] + " : F");
//     } else if (grades[i] < 70) {
//         console.log(students[i] + " : D");
//     } else if (grades[i] < 80) {
//         console.log(students[i] + " : C");
//     } else if (grades[i] < 90) {
//         console.log(students[i] + " : B");
//     } else {
//         console.log(students[i] + " : A");
//     }
// }