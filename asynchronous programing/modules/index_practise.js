var observer = require('./observer_practise');
var subject = require('./subject.practise');

var o1 = new observer.observer;
var o2 = new observer.observer;

subject.addObserver(o1);
subject.addObserver(o2);

subject.checkMemory();



