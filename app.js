var events = require('events');
var util = require('util');
// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvents', function(mssg){
//   console.log(mssg);
// });
//
// myEmitter.emit('someEvents', 'the event was emitted');

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter)
var james = new Person('james');
var mohit = new Person('mohit');
var rhu = new Person('rhu');

var people = [james, mohit, rhu];
people.forEach(function(Person) {
  Person.on('speak', function(mssg) {
    console.log(Person.name + ' said: ' + mssg);
  });
});

james.emit('speak', 'hey dude');
rhu.emit('speak', 'I want to eat');
