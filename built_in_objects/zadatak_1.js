

function changeBase(num, base, newBase) {
    var num = parseInt(num,base);
    var result = num.toString(newBase);
    return result;
}

console.log(changeBase(2,10,8));