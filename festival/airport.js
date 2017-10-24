'use strict';

(function () {
    
    function createFlight(relation, date) {
        var flight = new Flight (relation, new Date(date));
        return flight;
    }

    function createPassenger(name, surname, seatNumb, seatCat) {

        var person = new Person(name, surname);
        var seat = new Seat (seatNumb, seatCat)
        return new Passenger (person, seat);
    }

    var newAriport = new Airport();

    var bg_ny = createFlight('Belgrade - New York', 'Oct 25 2017');
    var bar_bg = createFlight('Barcelona - Belgrade', 'Nov 11 2017');
    
    var pass_1 = createPassenger('John', 'Snow', 1, 'b');
    var pass_2 = createPassenger('Cersei', 'Lannister', 2, 'b');
    var pass_3 = createPassenger('Daenerys', 'Targaryen', 14);
    var pass_4 = createPassenger('Tyrion', 'Lannister');

    bg_ny.addPassenger(pass_1);
    bg_ny.addPassenger(pass_2);
    bar_bg.addPassenger(pass_3);
    bar_bg.addPassenger(pass_4);
    
    newAriport.addFlight(bg_ny);
    newAriport.addFlight(bar_bg);



})();

function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getData = function () {
        return this.name + ' ' + this.surname;
    }
}

//b or e
function Seat(number, category) {
    this.number = number || Math.round(90 * Math.random() + 10);
    this.category = category || 'e';
}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;

    this.getData = function () {
        return this.seat.number + ', ' + this.seat.category.toUpperCase() + ', ' + this.person.getData();
    }
}

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPassangers = [];

    this.getData = function () {
        return date + ' ' + relation;
    }

    this.addPassenger = function (passenger) {
        this.listOfPassangers.push(passenger);
    }
}

function Airport() {
    this.name = 'Nikola Tesla';
    this.listOfFlights = [];

    this.addFlight = function (flight) {
        this.listOfFlights.push(flight);
    }

    this.getData = function () {
        return 'Airport: ' + this.name + ', total passengers: ' + 
    }
}