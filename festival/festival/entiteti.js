function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
};

Movie.prototype.getInfo = function () {
    return this.title + ' ' + this.length + ' ' + this.genre;
};

function Program(date) {
    this.date = date;
    this.movieList = [];
};

Program.prototype.getInfo = function () {
    return this.date.getDate() + '.' + (this.date.getMonth() + 1) + '.' + this.date.getFullYear() + '.';
};

//FESTIVAL!!!

function Festival(name) {
    this.name = name;
    this.programList = [];
};

Festival.prototype.getInfo = function () {
    
    festOutput = '<p>Festival: ' + this.name + ': </p>'
    for (var i = 0; i < this.programList.length; i++) {
        festOutput += '<p>' + this.programList[i].getInfo() + ': </p>';
        festOutput += '<ol>';
        for (var j = 0; j < this.programList[i].movieList.length; j++) {
            festOutput += '<li>' + this.programList[i].movieList[j].getInfo() + '</li>';
        }
        festOutput += '</ol>';
    }
    return festOutput;
};