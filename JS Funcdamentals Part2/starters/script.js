'use strict';

//simple function  definition

function log() {
  console.log('hello world!!');
}

//call/invoker/run function
log(1234);

function foorProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const juice = foorProcessor(4, 5);
console.log(juice);

const now = 2037;

//declarative function
//Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code
console.log(calAge1(1991)); // calling the function before the declaration this is not possible for annonymus function
function calAge1(birtyYear) {
  return now - birtyYear;
}

//annonymus function or function defined as expression
const calAge2 = function (birtyYear) {
  return now - birtyYear;
};

console.log(calAge2(1992));

//Arrow function
//for arrow function if we have only 1 line in the function we don't need {} and return statement explicitely
const calAge3 = birthYear => now - birthYear;
console.log(calAge3(1995));

//but if arrow function has more than 1 statement then {} and return statment is needed if the function returns value
const yearsUntilRetirement = birthYear => {
  const age = now - birthYear;
  return 65 - age;
};
console.log(yearsUntilRetirement(1995));

//for multiple parameters/arguments we have to use () and separate each arg with ','

const yearsUntilRetirement2 = (birthYear, name) => {
  const age = now - birthYear;
  return `${name} has ${65 - age} years till retirement`;
};
console.log(yearsUntilRetirement2(1995, 'jonas'));

//Arrays
//literal syntanx
const friends = ['michael', 'stepehen'];
console.log(friends);
// seccond way of creating array with new keyword
const years = new Array(1991, 1984, 2008);
console.log(years);
//like java in js also array index starts from 0
//print length of array
console.log(years.length);
//only primitive value in js are immutable so even if we assign an array or object type in const we can change the element of array and property of the object
friends[1] = 'rahul';
console.log(friends);
//we cannot a new array to the same const variable

//some basic array methods

friends.push('Vicky'); // Appends new elements to the end of an array, and returns the new length of the array.
console.log(friends);

friends.unshift('Jhon'); //  Inserts new elements at the start of an array, and returns the new length of the array.
console.log(friends);

friends.pop(); //Removes the last element from an array and returns it, If the array is empty, undefined is returned and the array is not modified.
console.log(friends);

friends.shift(); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(friends);
console.log(friends.indexOf('stepehen')); // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

console.log(friends.includes('stepehen')); // Determines whether an array includes a certain element, returning true or false as appropriate. checks for strict equality(=== and not ==) also has an optional parameter of starting index from where you want to begin search

//objects

const jonas = {
  firstName: 'jonas',
  lastName: 'david',
  age: 2037 - 1997,
  job: 'teacher',
  friends: ['vick', 'sam'],
};
console.log(jonas);

//there are 2 ways we can access an object using the dot operator or bracket,while accesing with dot operator we have to strictly use the property name of the object, but with [] we can write expression inside the [] that will be evaluated and mapped as the property,it is best to use ['<property name>'] when we are dynamically generating the property name
// when we try to access a property in an object that is not present then it returns undefined

console.log(jonas.firstName);
console.log(jonas['firstName']);
const nameConst = 'Name';
console.log(jonas[`last${nameConst}`]);

const jonas2 = {
  firstName: 'jonas',
  lastName: 'david',
  birthYear: 1999,
  hasDriverLicence: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  summaryFunction: function () {
    this.summary = `${this.firstName} is a ${this.calcAge()} old ${
      this.job
    } and ${this.hasDriverLicence ? 'a' : 'no'} driver's licence`;
    return this.summary;
  },
  job: 'teacher',
  friends: ['vick', 'sam'],
};

console.log(jonas2['calcAge']());
console.log(jonas2.age);
console.log(jonas2.summaryFunction());
console.log(jonas2.summary);

//loops

//for loop

for (let i = 1; i <= 10; i++) {
  console.log(`Hello world ${i}`);
}

// one of the most use of for loop is to loop through arrays
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//while loop
let i = 0;
while (i < years.length) {
  console.log(years[i]);
  i++;
}
i = 0;
//do while loop
do {
  console.log(years[i]);
  i++;
} while (i < years.length);
