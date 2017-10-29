'use strict';

(function () {
    function createMovie(movieTitle, movieLength, stringGenre) {
        if ((typeof movieLength) !== 'number') {
            return;
        }
        
        var genre = new Genre(stringGenre);
        var movie = new Movie(movieTitle, genre, movieLength);
        return movie;
    }

    function createProgram(date) {
        var newProgram = new Program(date);
        return newProgram;
    }


    var filmex = new Festival('Filmex Fest', 17);

    var adults = createProgram('Oct 21 2017');
    var kids = createProgram('10 5 2015');

    var titanik = createMovie('Titanik', 190 , 'drama');
    var thor = createMovie('Thor', 130, 'action');
    var inception = createMovie('Inception', 180, 'sci-fi');
    var alien = createMovie('Alien', 130, 'horror');

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
    this.totalMovieLength = function () {
        var count = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            count += this.listOfMovies[i].length;
        }
        return count;
    }

    this.getData = function () {
        var result = '';
        for (var i = 0; i < this.listOfMovies.length; i++) {
            result = result + '\t\t' + this.listOfMovies[i].getData() + '\n';
        }

        return '\t' + this.date + ', ' + 'program duration: ' + this.totalMovieLength() + '\n\n' + result + '\n';
    }

    

    this.addMovie = function (movie) {
        if (typeof movie == 'undefined') {
            return;
        }

        if (this.totalMovieLength() + movie.length > 480) {
            return;
        }

        this.listOfMovies.push(movie);
    }

    //DOVRSI ZANR
}

function Festival(name, maxNumOfMovies) {
    this.name = name;
    this.listOfPrograms = [];
    this.totalMovieNumber = 0;

    this.getData = function () {
        var result = '';


        for (var i = 0; i < this.listOfPrograms.length; i++) {
            result += this.listOfPrograms[i].getData();
            this.totalMovieNumber += this.listOfPrograms[i].listOfMovies.length;
        }

        if (this.listOfPrograms.length == 0) {
            return 'Weekend festival' + '\n' + '\t\t' + 'Program to be announced';
        }

        if(this.totalMovieNumber > maxNumOfMovies) {
            return 'Too many movies.'
        }

        return this.name + ', ' + this.totalMovieNumber + '\n\n' + result;

    }

    this.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }
}




