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

// '<h1>Hello <span style = \'color:orange\'>Margie</span></h1> <button style = \'background-color: green\'>Click me</button>'