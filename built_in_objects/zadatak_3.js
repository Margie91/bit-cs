function sorting(string){
    var split = string.split("");
    var sort = split.sort();
    var join = sort.join("");
    return join;
}

console.log(sorting("cherries bananas apples"));
