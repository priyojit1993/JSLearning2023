"use strict";
//constructor function

{
  //constructor function is and looks like a normal function,the only difference between a regular function and a constructor function is that we call the constructor function with a new operator.
  //constructor function name like class name starts with capital letter.arrow function does not work as constructor function as we know 'this' keyword do not work inside arrow function,
  const Person = function (firstName, birthYear) {
    //from function definition a constructor function looks like a normal function.
    //console.log(this); //Person {}
    this.firstName = firstName;
    this.birthYear = birthYear;
    //we should never create a method inside of a constructor function.because for each objects created using this function object will carry this function and have thousand copy of this function createad inside the constructor function.we would use the protoype object linked to this object by js to create function for this object.
  };

  //but when we call the constructor function here comes the change we call the function using new keyword.

  const michel = new Person("Michel", "09-08-1883");
  //behind the scene four steps happens.
  //1. a new empty object is created {}
  //2. function is called and  inside the function call the this keyword inside the function poins to the newly created object this={} in the execution context of the function.
  //3. the newly created object is linked to a prototype.
  //4. The object created in step 1 is returned from the constructor function.
  console.log(michel); //Person {firstName: 'Michel', birthYear: '09-08-1883'}

  // we can create new object using this constructor function and each of which will return a new object.

  const david = new Person("David", "09-12-1995");
  console.log(david);
  // altough we created 3 objects from constructor function but they are not technically objects created from class as js dont have classes from sense of traditional oop.
  console.log(david instanceof Person); //true , although this is not a techinal object from oop point of view still its an instance of Person

  //prototypes.
  //each and every function in js has a property called prototype including constructor function, evrey object that is created using constructor function will get access to all the methods and properties that we define on the constructor function's prototype property.
  Person.prototype.displayName = function () {
    console.log(this.firstName);
  };
  //since we defined the function with the prootype property of the constructor function so all the object created with this constructor function will have access to all the method defined in the prototype property
  michel.displayName();
  david.displayName();

  //each object created from the constructor function has a property attach to it which points to the prototype property of the function
  console.log(michel.__proto__);
  //we can check if the prototype property of constructor function is part of the given object or not
  console.log(Person.prototype.isPrototypeOf(michel)); //true

  //adding new property through prototype
  Person.prototype.species = "Homo Sapiens";
  console.log(david.species);

  //since this species property is created via prototype so it is inhertied property
  //method to check if property is inherited or own property.
  console.log(david.hasOwnProperty("firstName")); //true
  console.log(david.hasOwnProperty("species")); //false

  //if js does not find a property or function in an object then it searches for those properties or function in the prototype property and this is called prototype chain
}
/**
 * Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
 * 
 */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`new  speed after accelerate is ${this.speed}`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`new  speed after break is ${this.speed}`);
};

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);
BMW.accelerate();
BMW.accelerate();

BMW.break();
BMW.break();

Mercedes.accelerate();
Mercedes.accelerate();

Mercedes.break();
Mercedes.break();

//ES6 classes
{
  //class expression
  //const PersonCl =class{}
  //class declearation(more preffered)
  class PersonCl {
    //1st thing to do is to add consturctor, the name of constructor method in ES6 class should be constructor
    constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    }

    //to add methods in ES6 class we can do in the following manner
    //all the methods we write as method inside the class will be on the prototype of the class and not on the objects so it wont be copied for each object but will be shared by each object via the prototypal inheritence.
    calcAge() {
      console.log(`Age is ${2037 - this.birthYear}`);
    }
  }
  //whenever we want to  create an instance of the of the ES6 class we use the new keyword which will automatically call the constructor defined inside the class
  const michel = new PersonCl("Michel", 1997);
  console.log(michel);
  const jessica = new PersonCl("Jessica", 1995);
  console.log(jessica);
  michel.calcAge();
  jessica.calcAge();
  console.log(jessica.__proto__ === PersonCl.prototype); //true

  // we can also add methods to the ES6 class outside the class definition manually by using the prototype property
  PersonCl.prototype.displayName = function () {
    console.log(`name is ${this.firstName}`);
  };
  michel.displayName();
  jessica.displayName();
  //1. classes are not hoisted
  //2. like function classes are first class citizens
  //3. classes are executed in strict mode.

  //prototypal inheritence
  console.log(michel.__proto__); //{displayName: ƒ, constructor: ƒ, calcAge: ƒ} the prototype of PersonCl class
  console.log(michel.__proto__.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} //prototype of Object class which is parent of all class
  console.log(michel.__proto__.__proto__.__proto__); // null as prototype chain is no more after object class.

  //getter and setter (Accessor properties)
  const account = {
    owner: "Jonas",
    movements: [200, 530, 120, 300],
    get Latest() {
      return this.movements.slice(-1).pop();
    },
  };
  console.log(account.Latest);
}
