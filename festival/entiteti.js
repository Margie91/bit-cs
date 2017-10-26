function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getInfo = function () {
    return this.title + ' ' + this.length + ' ' + this.genre;
};

function Program(date) {
    this.date = date;
}

Program.prototype.getDate = function () {
    return this.date;
}