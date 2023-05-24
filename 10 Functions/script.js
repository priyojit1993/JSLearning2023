`use strict`;
//default parameters
{
  const bookings = [];
  //inside function parameter we can assign default values to parameter and in that default value we can even add valid expression where we can use a parameter defined before it in the expression and not parameter defined after .
  const bookingFunction = function (
    flightNumber,
    numPassenger = 1,
    price = 199 * numPassenger
  ) {
    //creating object by object literal method

    //old way od assigning default parameter before ES6
    // numPassenger ||= 1;
    // price ||= 199;

    const booking = {
      flightNumber, // similar to writing flightNumber:flightNumber here js will automatiindy create aporperty with the variable name and add its value as value.
      numPassenger,
      price,
    };
    bookings.push(booking);
    console.log(booking);
  };

  bookingFunction('LH123');
  bookingFunction('LH124', 2, 800);
  bookingFunction('LH125', 5);
  // the only way we can skip a parameter and use default val is to pass undefined for that value , otherwise the call value are stricly order in the parameter definition order.
  bookingFunction('LH125', undefined, 5);
}

//pass by value and pass by refference
{
  //when we pass primitive value to a function argument it goes as pass by value and any changes made to the value inside the function does not affect the variable holidng the primitive
  // but in case of object and other refference like array set map etc the argument passed is by refference so any changes made inside the function changes the original object as well
  const x = 10;
  const func1 = function (x) {
    x += 10;
    console.log(x);
  };
  func1(x);
  console.log(x);
  const y = {
    val: 10,
  };
  const func2 = function (y) {
    y.val += 10;
    console.log(y);
  };
  func2(y);
  console.log(y);
}
//First class and higher order functions.

/**
   * First class Function
        JavaScript treats function as first class citizens.
        That means functions are simply values.
        Function are just another "type of objects" and hence we can stored in variables.
        we can pss function as arguments to other functions.
        we can also return function from another function
        there are some methods defined for functions like array object and other object type data has which we can use eg bind()
    
    Higher order function: A function that recives another function as argument or returns a new function.

   */
//Functions accepting callback function
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  /**
   * Adds all the elements of an array into a string, separated by the specified separator string.
   * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
   */
  return [first.toUpperCase(), ...others].join(' ');
};
const transform = function (str, func) {
  console.log(`original string is ${str}`);
  console.log(`Transform string is : ${func(str)}`);
  console.log(`transformed by ${func.name} function`);
};
//the function that are passedas parameter into the higher order function are called callback function. in this case oneWord() and upperFirstWord() are callback function for transform()
transform(`JavaScript is the best!!`, upperFirstWord);
transform(`JavaScript is the best!!`, oneWord);

//function that returns a new function
const f1 = function (greet) {
  return function (s) {
    console.log(`${greet} ${s}`);
  };
};

const x = f1('hello');
x('Jhon');
f1('hi')('undertaker');

const f1Arrow = greet => name => console.log(`${greet} ${name}`);
f1Arrow('hi')('kane');

//call and apply method
const airAsia = {
  airline: 'Air Asia',
  iataCode: 'AA',
  bookings: [],
  book(flightNumber, passangerName) {
    console.log(
      `${passangerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      passangerName,
    });
  },
};
airAsia.book('239', 'priyojit Pal');
airAsia.book('635', 'Rajesh De');
console.log(airAsia.bookings);

//now we will create another object indigo that has similar property and would like to reuse the function book of airasia object
const indigo = {
  airline: 'Indigo',
  iataCode: 'IG',
  bookings: [],
};

//first we store the airasia object book method into a variable
const book = airAsia.book;
//when we call the book function using this constant it will through error because inside the book method we use this keyword which in case of the above book constant where we basically copied the object's book method has no use so in the context airasia.book() this keyword will work but when we call book() this wont work and throw error as this is undefined for it
//to solve this issue we have 2 methods which is build in for evrey function named call() and apply() both has similar functionality it takes in 2 things , 1. the object for which this global function will be called and list of paramater for the actual function.
//now when it takes the object by the help of it the this is resolved
/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 * @param thisArg An object to which the this keyword can refer inside the new function.
 * @param argArray A list of arguments to be passed to the new function.
 */
book.call(indigo, '567', 'Jhon Doe');
//the only difference is apply method takes the arguement of the function to be called as an array of elements wherease call method takes at spreaded arguments.  apply(this: Function, thisArg: any, argArray?: any): any;     call(this: Function, thisArg: any, ...argArray: any[]): any;

book.apply(indigo, ['433', 'David Gibson']);

//the bind method
//just like call method bind method also allows to manually set the this keyword for any function call.but bind() does not call the function immedietly but as the name suggests it returns a new function where the this keyword is bound.

const bookAirAsia = book.bind(airAsia);
//now this new function bookAirAsia will be bounded to airasia object and all the this refference in it will reffer to airasia object.
bookAirAsia('987', 'Marie Gomes');
// if we specify on of the parameter of the actual function in bind along with object refference then the new function will be bounded to the object refference and have default value for that particular arguments and while calling the bounded method if we dont pass anything for that argument then the value with which we mentioned in bind() will be used.

const bookAirAsia2 = book.bind(airAsia, '24');
bookAirAsia2('Rahul Saha');

airAsia.planes = 300;
airAsia.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

//this will result in NaN because in an event handler function the this keyword points to the element on which the element is attached which in this case is the button object not the airAsia object as a result inside the callback method the this keyword will point to the button element as this keyword is set dynamically
//document.querySelector('.buy').addEventListener('click', airAsia.buyPlane);
// but when we use bind we are creating a new keyword and setting the this to point to airAsia object rather than the button object.
document
  .querySelector('.buy')
  .addEventListener('click', airAsia.buyPlane.bind(airAsia));

/*
  
  Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
  */
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //1.1
    const answer = Number(
      prompt(`What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)`)
    );
    if (answer < this.answers.length && answer >= 0) {
      this.answers[answer] = this.answers[answer] + 1;
    } else {
      alert('Incorrect output valid range is between 0 and 3');
    }
    this.displayResults(this.answers);
  },
  displayResults(arr, type = 'array') {
    if (type === 'string') {
      console.log(`poll results are ${arr.join(',')}`);
    } else if (type === 'array') {
      console.log(arr);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//bonus
poll.displayResults([5, 2, 3], 'string');
poll.displayResults([5, 2, 3], 'array');
poll.displayResults([1, 5, 3, 9, 6, 1], 'string');
poll.displayResults([1, 5, 3, 9, 6, 1], 'array');

//Immedietly invoked function expression (IIFE)
//function that dissapears after its called once(needed for async await)
// we enclose the IIFE in () to make it work as an expression or else we have to assign a variable and js will throw error
//IIFE normal function
(function () {
  console.log('this will never run again');
})();
//IIFE arrow function
(() => {
  console.log('this will also never run again');
})();

//closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger count`);
  };
};
const booker = secureBooking();
//here when we call the secureBooking() function and store in the variable in the call stack it gets executed and removed and since the passengerCount variable was a part of the secureBooking function so its scope was limited to it
//Now when we call the booker() which internally calls the function returned by secureBooking() ideally this booker() is in the global scope and should not have access to passengerCount which was defined in the secureBooking() method but shockinlgy it does have access because of the feature called closure.
//Closure states that a function has access to the variables environment(VE) of the execution context in which it was created/defined and since the secureBooking() method is returning a method which we are storing in book variable but the method was created inside the context of secureBooking() so it is able to still access the passengerCount variable even when the secureBooking() function execution context has finished its execution and is not in the call stack
//VE attached to the function,exactly as it was at the time and place when the function was created.
booker();
booker();
booker();
//closure is the closed over variable-environment of the execution context in which the function was created even after the execution context is gone.
//closure gives a function access to all the variables of its parent function even after that parent function has returned. The inner function keeps a refference to its outer scope.which preserves the scope chain throughout time.
//in the below example altough the variable f was defined in global scope but since it was assigned inside the g function scope and in the assignment of f variable a function was attached whose definition lied within the scope of g() so even after g() execution is completed and its moved out of call stack f()  is still able to access the variable a which was defined inside ths scope of g() due to closure property
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
/**
 * 
 * This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
(function () {
const header = document.querySelector('h1');
header.style.color = 'red';
})();
 * 
 */
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
})();
