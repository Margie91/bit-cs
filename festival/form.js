var movies = [];

function createMovie() {
    
    var titleElement = document.getElementById('movieTitle');
    var lengthElement  = document.getElementById('movieLength');
    var genreSelectElement = document.getElementById('genre-sel');
    var genreOptionElement = genreSelectElement[genreSelectElement.selectedIndex];
    var movieListElement = document.getElementById('movie-list');
    var errorElement = document.getElementById('movieError');


    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreOptionElement.value;

//ERROR ZA MOVIE!!
    if(!title || !length || (genre === 'none')) {
        errorElement.textContent = 'Error';
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

    for (var i = 0; i < movies.length; i++) {
        var film = movies[i];
        movieListHTML += '<li>' + film.getInfo() + '</li>';
    }

    movieListHTML += '</ul>';


//UBACUJE LISTU FILMOVA U UL DIV ISPOD DUGMETA
    movieListElement.innerHTML = getMovieListHTML(movies);


//RESTARTUJE TITLE I LENGTH KADA KREIRAMO MOVIE
    titleElement.value = '';
    lengthElement.value = '';

}

function getMovieListHTML(moviesArray) {


   var movieListHTML = '<ul>';

    for (var i = 0; i < movies.length; i++) {
        var film = movies[i];
        movieListHTML += '<li>' + film.getInfo() + '</li>';
    }

    movieListHTML += '</ul>';

    return movieListHTML;
    
}


//OVDE PRAVIMO KONSTURKTOR ZA DATUM!!!

var programs = [];

function createProgram() {
    var dateElement = document.getElementById('date');
    var errorElement = document.getElementById('dateError');

    var pDate = dateElement.value;
    var formatedDate = formatedDate(pDate);


//ERROR ZA DATUM
    if(!date) {
        errorElement.textContent = 'Error';
        return;
    }

    errorElement.textContent = '';

    var program = new Program(formatedDate);
    
        programs.push(program);


    function formatedDate(stringDate) {
        var date = new Date(stringDate);
        var result = '';
        return result += date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + '.';
    }

    

}

