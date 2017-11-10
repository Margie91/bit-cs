import SampleModule from './sample_module';


console.log("index.js loaded");

let message = "Hello";

var module = new SampleModule();
module.print();


document.write(message);

//http://localhost:8080/webpack-dev-server/index.html