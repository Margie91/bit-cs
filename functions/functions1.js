function isBlank(string){
    if (typeof string !== "string") {
        return false;
    }  else if (string == "") {
        return true;
    } else {
        return false;
    }
}

console.log(isBlank(' '));