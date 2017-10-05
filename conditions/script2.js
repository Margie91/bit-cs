var a = 5, b = 10;
var result;

if ((typeof a === "number") && (typeof b === "number")) {
    result = (a > b) ? "The larger number is " + a : "The larger number is " + b;
    console.log(result);
} else {
    console.log("Error");
}