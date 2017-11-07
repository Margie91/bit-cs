var http = require('http');
var hostname = '127.0.0.1';
var port = 3000;
var info = [ 
    {
        name: 'Marija',
        age: 26
    }
]

var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(info));
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});

var open = require('open');
open('http://127.0.0.1:3000/');




var figlet = require('figlet');

figlet('Hello World!!', function(err, data) {
   if (err) {
       console.log('Something went wrong...');
       console.dir(err);
       return;
   }
   console.log(data)
});