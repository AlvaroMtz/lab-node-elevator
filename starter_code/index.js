const Elevator = require('./elevator.js');
const Person = require('./person');
const elevator = new Elevator();
const Juan = new Person('Juan', 0 , 5);
const Carlos = new Person('Carlos', 2 , 9);
const Abel= new Person('Abel', 8 , 1);
const Daniel = new Person('Daniel', 10 , 0);
const Alejandro = new Person('Alejandro', 6, 10);

elevator.start();



