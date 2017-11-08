var os = require('os');

var observers = [];

function addObserver(observer) {
    observers.push(observer);
}

function NotifyAll() {
    for (var i = 0; i < observers.length; i++) {
        observers[i].notify();
    }
}

function checkMemory() {
    setInterval(function () {
        var memory = os.freemem();
        console.log(memory);
        if (memory < 1906900992){
            NotifyAll();
        } else {
            console.log(memory);
        }
    }, 1000)
}

module.exports = {
    addObserver: addObserver,
    checkMemory: checkMemory
}