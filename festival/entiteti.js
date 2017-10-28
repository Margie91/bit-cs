function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
};

Movie.prototype.getInfo = function () {
    return this.title + ' ' + this.length + ' ' + this.genre;
};

function Program(date) {
    this.date = new Date(date);
    this.movieList = [];
};

Program.prototype.getInfo = function () {
    return this.date.getDate() + '.' + (this.date.getMonth() + 1) + '.' + this.date.getFullYear() + '.';
};

//FESTIVAL!!!