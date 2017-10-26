'use strict';


function Country(nameOfcountry, odds, continent) {
    this.nameOfcountry = nameOfcountry;
    this.odds = odds;
    this.continent = continent;
}

function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;

}

Person.prototype.getData = function () {
    return this.name + ' ' + this.surname + ' ' + this.dateOfBirth.getDate() + '.' + this.dateOfBirth.getMonth()
        + '.' + this.dateOfBirth.getFullYear() + '.';
};

Person.prototype.getAge = function () {
    return new Date().getFullYear() - this.dateOfBirth.getFullYear();
};

function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
    this.winAmount = this.country.odds * this.betAmount;
}

Player.prototype.getData = function () {
    return this.country.nameOfcountry + ", " + this.winAmount + ", " + this.person.name + " " + this.person.surname +
        ", " + this.person.getAge() + ' years';
};

function Address(country, city, postal, street, number) {
    this.country = country;
    this.city = city;
    this.postal = postal;
    this.street = street;
    this.number = number;
}
Address.prototype.getData = function () {
    return this.street + " " + this.number + ", " + this.postal + ", " + this.country.nameOfcountry;
};

function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];
    this.sumOfAllBets = 0;
}

BettingPlace.prototype.addPlayer = function (player) {
    this.listOfPlayers.push(player);
};

BettingPlace.prototype.getData = function () {

    for (var i = 0; i < this.listOfPlayers.length; i++) {
        this.sumOfAllBets += this.listOfPlayers[i].winAmount;
    }
    return this.address.street + ", " + this.address.postal + ", " + this.address.city +
        ", " + "Sum of all bets: " + this.sumOfAllBets + "eur";
};

function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numberOfPlayers = 0;
    this.countSR =0;
}

BettingHouse.prototype.addBetPlace = function (betPlace) {
    this.listOfBettingPlaces.push(betPlace);
    this.numberOfPlayers += betPlace.listOfPlayers.length;
};

BettingHouse.prototype.getData = function () {
    var result = '';

    result += this.competition + ', ' + this.listOfBettingPlaces.length
        + ' betting places, ' + this.numberOfPlayers + ' bets';

    for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
        result += '\n\t' + this.listOfBettingPlaces[i].getData();
        for (var j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++) {
            var player = this.listOfBettingPlaces[i].listOfPlayers[j];
            result += '\n\t\t' + player.getData();
            if(player.country.nameOfcountry.toLowerCase() == 'sr') {
                this.countSR++;
            }
        }
    }
    result += '\nThere are ' + this.countSR + ' bets on Serbia';
    return result;
}



var Continent = Object.freeze({
    EU: 'Europe',
    AS: 'Asia',
    AF: 'Africa',
    SA: 'South America',
    NA: 'North America',
    AU: 'Australia'
});


(function () {


    function createPlayer(nameOfcountry, odds, continent, name, surname, dateOfBirth, betAmount) {
        var newCountry = new Country(nameOfcountry, odds, continent);
        var newPerson = new Person(name, surname, new Date(dateOfBirth));
        return new Player(newPerson, betAmount, newCountry);
    }

    function createBettingPlace(address) {
        var betting_place = new BettingPlace(address);
        return betting_place;
    }

    var worldCup = new BettingHouse('Football World Cup Winner');

    var player_1 = createPlayer('SR', 15, Continent.EU, 'Ivan', 'Nikolic', 'Nov 15 1984', 1500);
    var player_2 = createPlayer('SR', 15, Continent.EU, 'Ivan', 'Nikolic', 'Nov 15 1984', 1500);
    var player_3 = createPlayer('GR', 15, Continent.EU, 'Ivan', 'Nikolic', 'Nov 15 1984', 1500);
    var player_4 = createPlayer('SR', 15, Continent.EU, 'Ivan', 'Nikolic', 'Nov 15 1984', 1500);

    var bettPlaceAddress_1 = new Address('SR', 'Beograd', '11000', 'Nemanjina', '4');
    var bettPlaceAddress_2 = new Address('SR', 'Beograd', '11000', 'Nemanjina', '4');

    var bettPlace_1 = createBettingPlace(bettPlaceAddress_1);
    var bettPlace_2 = createBettingPlace(bettPlaceAddress_2);

    bettPlace_1.addPlayer(player_1);
    bettPlace_1.addPlayer(player_2);
    bettPlace_2.addPlayer(player_3);
    bettPlace_2.addPlayer(player_4);

    worldCup.addBetPlace(bettPlace_1);
    worldCup.addBetPlace(bettPlace_2);

    console.log(worldCup.getData());

})();
