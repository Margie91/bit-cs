console.log('Hi');

var p1 = new Promise(function (resolve, reject) {
    // var result = 0;

    for (var i = 0; i < 100; i++) {
        setTimeout(function (i) {
            console.log('first');
            if(i == 99) {
                resolve();
            }
        }, i, i);

    
    }
    // console.log(result);

    // if (result !== 99999999) {
    //     reject('Error!');

    // resolve(result);


    // console.log('Done!');


})

var p2 = new Promise(function (resolve, reject) {
    for (var i = 0; i < 1000; i++) {
        setTimeout(function (i) {
            console.log('second');
            if (i === 999) {
                resolve();
            }
        }, i, i);
    }
})

// console.log('Keep working');

p1.then(function (res) {
    console.log('p1 I am done calculating!');
}).catch(function (reason) {
    console.log(reason);
});

p2.then(function (res) {
    console.log('p2 I am done calculating!');
}).catch(function (reason) {
    console.log(reason);
});


var racePromises = Promise.race([p1, p2]);
racePromises.then(function () {
    console.log('All promises done!');

});

//console.log(racePromises);