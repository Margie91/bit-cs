var movies = [];

var programs = [];

var fest = new Festival('Halloween Fest');

function createMovie() {

    var titleElement = document.getElementById('movieTitle');
    var lengthElement = document.getElementById('movieLength');
    var genreSelectElement = document.getElementById('genre-sel');
    var genreOptionElement = genreSelectElement[genreSelectElement.selectedIndex];
    var movieListElement = document.getElementById('movie-list');
    var errorElement = document.getElementById('movieError');
    var moviesSelectElement = document.getElementById('movies');


    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreOptionElement.value;

    //ERROR ZA MOVIE!!
    if (!title || !length || (genre === 'none')) {
        errorElement.textContent = 'Error';
        return;
    }

    errorElement.textContent = '';


    for (var i = 0; i < movies.length; i++) {
        if (title.toLowerCase() == movies[i].title)
        errorElement.textContent = 'Error! This movie already exists!'
        return;
    }

        errorElement.textContent = '';


    //OVDE PRAVIMO MOVIE
    var movie = new Movie(title, length, genre);

    //OVDE UBACUJEMO MOVIE U LIST OF MOVIES!!
    movies.push(movie);


    //moze i preko createElement()!!!!

    //PRAVIMO UL KOJI NAM PRIKAZUJE KOJE FILMOVE SMO NAPRAVILI
    var movieListHTML = '<ul>';
    var moviesOptions = '<option value="none">--</option>';

    for (var i = 0; i < movies.length; i++) {
        var film = movies[i];
        movieListHTML += '<li>' + film.getInfo() + '</li>';
        moviesOptions += '<option + value =' + i + '>' + film.title + '</option>'
    }

    movieListHTML += '</ul>';


    //UBACUJE LISTU FILMOVA U UL DIV ISPOD DUGMETA
    movieListElement.innerHTML = movieListHTML;
    moviesSelectElement.innerHTML = moviesOptions;


    //RESTARTUJE TITLE I LENGTH KADA KREIRAMO MOVIE
    titleElement.value = '';
    lengthElement.value = '';

};




//OVDE PRAVIMO KONSTURKTOR ZA DATUM!!!


function createProgram() {
    var dateElement = document.getElementById('date');
    var errorElement = document.getElementById('dateError');
    var progListElement = document.getElementById('program-list');
    var progSelectElement = document.getElementById('programs');
    var festProgSelectElement = document.getElementById('festivalProgram');

    var pDate = dateElement.value;


    //ERROR ZA DATUM
    if (!pDate) {
        errorElement.textContent = 'Error';
        return;
    }

    errorElement.textContent = '';

    for (var i = 0; i < programs.length; i++) {
        if ((new Date(pDate)).toDateString() == programs[i].date.toDateString()) {
            errorElement.textContent = "Error! Program already created."
            return;
        }
    }

    errorElement.textContent = "";

    var program = new Program(new Date(pDate));

    programs.push(program);

    var programListHTML = '<ul>';
    var programsOptions = '<option value="none">--</option>';
    var festProgListOptions = '<option value="none">--</option>';

    for (var i = 0; i < programs.length; i++) {
        var prog = programs[i];
        programListHTML += '<li>' + prog.getInfo() + '</li>';
        programsOptions += '<option value =' + i + '>' + prog.getInfo() + '</option>';
        festProgListOptions += '<option value =' + i + '>' + prog.getInfo() + '</option>';
    }

    programListHTML += '</ul>';

    progListElement.innerHTML = programListHTML;
    progSelectElement.innerHTML = programsOptions;
    festProgSelectElement.innerHTML = festProgListOptions;

};

//OVDE SE DODAJE SELEKTOVAN FILM U SELEKTOVAN PROGRAM

function addMovie() {
    var progSelectElement = document.getElementById('programs');
    var progOptionSelected = progSelectElement[progSelectElement.selectedIndex].value;
    var moviesSelectElement = document.getElementById('movies');
    var moivesOptionSelected = moviesSelectElement[moviesSelectElement.selectedIndex].value;
    var programMovieList = document.getElementById('movieList_in_program');
    var erorrMovieList = document.getElementById('error_program_movie_list');

    //ERROR ako nije selekovan program ili film
    if (progOptionSelected === 'none' || moivesOptionSelected === 'none') {
        erorrMovieList.textContent = 'Error! Please select a movie and a program!';
        return;
    }

    erorrMovieList.textContent = '';

    for (var i = 0; i < programs[progOptionSelected].movieList.length; i++) {
        if (movies[moivesOptionSelected].title == programs[progOptionSelected].movieList[i].title) {
            erorrMovieList.textContent = 'Error! This movie already exists in this program!';
            return;
        }
        
    }

    erorrMovieList.textContent = '';


    //dodaje se selektovani movie
    programs[progOptionSelected].movieList.push(movies[moivesOptionSelected]);

    var output = '<p> Program date: ' + programs[progOptionSelected].getInfo() + '</p>';
    output += '<ol>';

    for (var i = 0; i < programs[progOptionSelected].movieList.length; i++) {
        output += '<li>' + programs[progOptionSelected].movieList[i].getInfo() + '</li>';
    }

    output += '</ol>';

    programMovieList.innerHTML = output;

}

//DODAJE SE PROGRAM U FESTIVAL

function addProgram() {
    var festProgSelectElement = document.getElementById('festivalProgram');
    var festProgOptionSelected = festProgSelectElement[festProgSelectElement.selectedIndex].value;
    var festError = document.getElementById('festivalError');

    festError.classList.remove('green');
    festError.textContent = '';

    if (festProgOptionSelected == 'none') {
        festError.textContent = 'Error! Please select a program!';
        return;
    }

    festError.textContent = '';

    for (var i = 0; i < fest.programList.length; i++) {
        if(fest.programList[i].getInfo() == programs[festProgOptionSelected].getInfo()) {
            festError.textContent = 'Error! Program already exist in this festival!';
            return;
        }
        
    }

    //dodaje se selektovani program u festival
    fest.programList.push(programs[festProgOptionSelected]);

    festError.classList.add('green');
    festError.textContent = 'Program added to festival.'

}

function festInfo() {
    var festList = document.getElementById('festivalList');
    var festError = document.getElementById('festivalError');

    if (fest.programList < 1) {
        festError.textContent = 'There are no programs ih this fest!';
        return;
    }

    festError.textContent = '';

    festList.innerHTML = fest.getInfo();

}


