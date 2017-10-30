    "use stirct";
var dudeObj = {
    job: 'Ninja',
    job2: "CEO",
    say: function (who) {
        return 'Hey ' + who + ', I am a ' + this.job + " and i am " + this.job2;
    }
 };
//  dudeObj.say('Dude'); // "Haya Dude, I am a Ninja"
 
 var programmerObj = { job: 'Scripting guru!' };
 var steveJobs = {job2: " dead!", job:" rise"};

//  console.log(dudeObj.say.apply(steveJobs, 'Dude'));

var person = {
    name: 'Marija',
    age: '26',
    intro: function () {
        return 'Hi, my name is ' + this.name + ' and I am ' + this.age;
        
    }

}

var marko = Object.create(person);

marko.name = 'Marko';
marko.age = '25';

marko.intro = person.intro.bind(marko);

console.log(marko.intro());






