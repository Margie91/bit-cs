var movies = [];

var programs = [];

function createMovie() {
    
    var titleElement = document.getElementById('movieTitle');
    var lengthElement  = document.getElementById('movieLength');
    var genreSelectElement = document.getElementById('genre-sel');
    var genreOptionElement = genreSelectElement[genreSelectElement.selectedIndex];
    var movieListElement = document.getElementById('movie-list');
    var errorElement = document.getElementById('movieError');
    var moviesSelectElement = document.getElementById('movies');


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
    var moviesOptions = '<option value="none">--</option>';

    for (var i = 0; i < movies.length; i++) {
        var film = movies[i];
        movieListHTML += '<li>' + film.getInfo() + '</li>';
        moviesOptions += '<option>' + film.title + '</option>'
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

    var pDate = dateElement.value;


//ERROR ZA DATUM
    if(!pDate) {
        errorElement.textContent = 'Error';
        return;
    }

    errorElement.textContent = '';

    var program = new Program(pDate);
    
    programs.push(program);
    
    var programListHTML = '<ul>';
    var programsOptions = '<option value="none">--</option>';
    
        for (var i = 0; i < programs.length; i++) {
            var prog = programs[i];
            programListHTML += '<li>' + prog.getInfo() + '</li>';
            programsOptions += '<option>' + prog.getInfo() + '</option>'
        }
    
        programListHTML += '</ul>';

        progListElement.innerHTML = programListHTML;
        progSelectElement.innerHTML = programsOptions;

};

