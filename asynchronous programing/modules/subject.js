    var os = require('os');
    let observers = [];
    
    function addObserver(observer){
        observers.push(observer);
    }

    function notifyAll(){
        for(let i = 0; i < observers.length; i++){
            observers[i].notify();
        }
    }

    function checkMem(){
        setInterval(function(){
            var mem = os.freemem();
            if(mem <= 1524334592){
                notifyAll();
            }
        }, 1000);
    }    


    module.exports = {
        addObserver: addObserver,
        notifyAll: notifyAll,
        checkMem: checkMem
    }



