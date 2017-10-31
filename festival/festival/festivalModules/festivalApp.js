var DataController = (function () {
    
        var data = {
            movies: []
        };
    
        function Movie(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;
        }
    
        Movie.prototype.getInfo = function () {
            return this.title + ', ' + ' ' + this.length + 'min, ' + this.genre;
        }
    
        function addMovie(title, length, genre) {
            var movie = new Movie(title, parseFloat(length), genre);
            data.movies.push(movie);
            return movie;
        }
    
        function calcTotalMovieLength() {
            var total = 0;
    
            data.movies.forEach(function(movie) {
                total += movie.length;
            });
            console.log(total);
                return total;
        }
    
        //test
        function logData() {
            console.log(data);
        }
    
        return {
            addMovieItem: addMovie,
            //test
            log: logData,
            calcLength: calcTotalMovieLength
        }
    
    })();
    
    var UIController = (function () {

    var DOMStrings = {
        inputTitle: 'movieTitle',
        inputLength: 'movieLength',
        selectGenre: 'genre-sel',
        buttonCreate: '#create',
        formEl: 'form',
        movieError: '#movieError',
        totalLength: '#totalLength p'
    }
    function getDOMStrings() {
        return DOMStrings;
    }

    function collectInput() {
        var titleElement = document.getElementById(DOMStrings.inputTitle);
        var lengthElement = document.getElementById(DOMStrings.inputLength);
        var genreSelectElement = document.getElementById(DOMStrings.selectGenre);
        var genreOptionElement = genreSelectElement[genreSelectElement.selectedIndex];

        var result = {
            title: titleElement.value,
            length: lengthElement.value,
            genre: genreOptionElement.value
        }

        return result;
    }

    function displayListItem(movie) {
        var listEl = document.querySelector('#movie-list ul');

        var htmlItem = '<li>' + movie.getInfo() + '</li>';

        listEl.insertAdjacentHTML('beforeend', htmlItem);
    }

    function clearFormInputs() {
        document.querySelector(DOMStrings.formEl).reset();
        document.querySelector(DOMStrings.movieError).textContent = '';
    }

    function displayTotalMovieLength() {
        var lengthEl = document.querySelector(DOMStrings.totalLength);
        lengthEl.textContent = 'Total length of all movies: ' + DataController.calcLength() + 'min';
    }

    function showError(input) {
        var errorMsg = 'Unknown Error!';
        if (!input.title) {
            error = 'Error! Enter title';
        } else if (!input.length) {
            errorMsg = 'Error! Enter length';
        } else if (input.genre == 'none') {
            errorMsg = 'Error! Select genre';
        }

        document.querySelector(DOMStrings.movieError).textContent = errorMsg;
    }

    return {
        getInput: collectInput,
        displayListItem: displayListItem,
        DOMStrings: getDOMStrings,
        reset: clearFormInputs,
        showError: showError,
        displayLength: displayTotalMovieLength
    }

})();



var mainController = (function (UIctrl, dataCtrl) {


    function setUpEventListeners() {
        var DOM = UIctrl.DOMStrings();

        document.querySelector(DOM.buttonCreate).addEventListener('click', function () {
            ctrlAddMovieItem();
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                ctrlAddMovieItem();
            }
        });

    }



    function ctrlAddMovieItem() {
        //1.get form data
        var input = UIctrl.getInput();

        //validate error
        if (!input.title || !input.length || input.genre == 'none') {
            UIctrl.showError(input);
            return;
        }
        //2.add movie to list
        var movie = dataCtrl.addMovieItem(input.title, input.length, input.genre);

        //3.clear form inputs
        UIctrl.reset();


        // 4. show list of movies on UI
        UIctrl.displayListItem(movie);

        //5. calc movie count
       

        //6. update UI
       UIctrl.displayLength();
    }




    return {
        init: function () {
            console.log('App has started.')
            setUpEventListeners();
        }
    }

})(UIController, DataController);

mainController.init();