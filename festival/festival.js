'use strict';

(function () {
    function createMovie(movieTitle, movieLength, stringGenre) {
        var genre = new Genre(stringGenre);
        var movie = new Movie(movieTitle, genre, movieLength);
        return movie;
    }

    function createProgram(date) {
        var newProgram = new Program(date);
        return newProgram;
    }


    var filmex = new Festival('Filmex Fest');

    var adults = createProgram('Oct 21 2017');

    var kids = createProgram('10 5 2015');

    var titanik = createMovie('Titanik', 190, 'drama');
    var thor = createMovie('Thor', 130, 'action');
    var inception = createMovie('Inception', 180, 'sci-fi');
    var alien = createMovie('Alien', 143, 'horror');

    adults.addMovie(titanik);
    adults.addMovie(thor);
    adults.addMovie(inception);
    adults.addMovie(alien);

    kids.addMovie(titanik);
    kids.addMovie(thor);
    kids.addMovie(inception);
    kids.addMovie(alien);

    filmex.addProgram(adults);
    filmex.addProgram(kids);

    console.log(filmex.getData());
})();

function Genre(name) {
    this.name = name || 'none';

    this.getData = function () {
        return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
    }
}

function Movie(title, genre, length) {
    this.name = title;
    this.genre = genre;
    if (length > 60) {
        this.length = length;
    } else {
        return 'This is not a movie!'
    }

    this.getData = function () {
        var result = this.name + ', ' + this.length + ', ' + this.genre.getData();
        return result;
    }
}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.numberOfMovies = 0;

    this.getData = function () {
        var result = '';
        var count = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            result = result + '\t' + this.listOfMovies[i].getData() + '\n';
            count += this.listOfMovies[i].length;
        }

        return this.date + ', ' + count + '\n' + result;
    }

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }
}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.totalMovieNumber = 0;

    this.getData = function () {
        var result = '';
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            result += this.listOfPrograms[i].getData();
            this.totalMovieNumber += this.listOfPrograms[i].listOfMovies.length;
        }

        return this.name + ', ' + this.totalMovieNumber + '\n\n' + result;
    }

    this.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }
}




