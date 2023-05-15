'use strict';
'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //in this method while calling it we are sending the entire object and in the function body we are using the destructering property to destructre the object into variables also we can add default value to this de-structured variable in case the object dont send those property,which is a good programming practice and if dont use can lead to undefined value and hence error.
  orderDelivery: function ({ time, startIndex = 0, mainIndex = 0, address }) {
    console.log(
      `order recieved! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at time ${time}`
    );
  },
};
//array destructering
{
  // destructering array before ES6
  const arr = [1, 2, 3];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  console.log(arr);
  console.log(a);
  console.log(b);
  console.log(c);

  // destructering array after ES6
  //now the three elements of the array will be automatically assigned to the three variables defined inside [] its called destructering assingments
  const [x, y, z] = arr;
  console.log(x);
  console.log(y);
  console.log(z);

  //this will extract the first 2 elements of the categories array inside resturant object and assign that to the two varriables,if we want to skip elements of the array while de-structering then we add a blank there as show below
  let [first, seccond] = restaurant.categories;
  console.log(first);
  console.log(seccond);

  // swapping without destrucring
  const temp = first;
  first = seccond;
  seccond = temp;

  console.log(first);
  console.log(seccond);

  //swapping with destructering.
  [seccond, first] = [first, seccond];
  console.log(first);
  console.log(seccond);

  //nested de-structering
  const arrayofArray1 = [1, 2, [4, 5]];
  console.log(arrayofArray1);
  const [one, , [three, four]] = arrayofArray1;
  console.log(one);
  console.log(three);
  console.log(four);

  //setting default values while destructering

  const arr2 = [1, 2, 3];
  const [p, q, r, s] = arr2;
  console.log(p, q, r, s); //1,2,3,undefined

  const arr3 = [1, 2, 3];
  const [i = 1, j = 2, k = 3, l = 99] = arr2;
  console.log(i, j, k, l); //1,2,3,99
}

//object destructering
{
  //destructering objects with variable name same as object property name.
  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);

  //destructering objects with variable name not same as object property name.

  const {
    name: restaurantName,
    categories: restaurantCategories,
    openingHours: restaurantOpeningHours,
  } = restaurant;

  console.log(
    `destructering objects with variable name not same as object property name`
  );
  console.log(restaurantName, restaurantCategories, restaurantOpeningHours);

  //re assignging using de structering

  let a = 120;
  let b = 123;
  const obj = {
    a: 1,
    b: 2,
  };
  console.log(a, b);
  ({ a, b } = obj); // to use destructering while re-assigning we have to wrap in () or else js will take {} as a code block and throw error
  console.log(a, b);

  //nested object desturctering
  //here we are nesting the internal object while destructering
  const {
    fri: { open: o, close: c },
  } = openingHours;
  console.log(o, c);

  //the real practical example of destructering is when we de structre the values in the function parameter at runtime
  restaurant.orderDelivery({
    time: '22:30',
    address: '06,baguiati road',
    mainIndex: 2,
    startIndex: 2,
  });
  restaurant.orderDelivery({
    time: '22:30',
    address: '06,baguiati road',
  });
}

//spread operator
{
  //spread operator (...) is used to expand the array into all its elements,unpacking all elements all at once.

  const arr = [1, 2, 3];
  console.log(...arr); // the array gets spread and output is 3 individual values 1 2 3
  //creating new array from the above array along with some new elements without spread operator here we have a draw back we need to know the total elements of array and if the array is long then we have to write all the elements here.
  const arr1 = [4, 5, arr[0], arr[1], arr[2]];
  console.log(arr1);

  // doing the same with spread operator
  const arr2 = [7, 8, ...arr];
  //here ...arr spreads the arr array and expands the elemnts element inside the new array
  console.log(arr2);

  const newMenu = [...restaurant.mainMenu, 'Gnocci'];
  console.log(newMenu);
  //difference between spread operator and destrutering is that spread operator takes all the elements from the array and do not assign them into variables.

  //spread operator has 2 use cases a) make shallow copies of array and b) merge two arrays together.

  //shallow copies of array using spread operator
  const mainMenuCopy = [...restaurant.mainMenu];

  //merge 2 arrays
  const startMenuMainMeuMerge = [
    ...restaurant.starterMenu,
    ...restaurant.mainMenu,
  ];
  console.log(startMenuMainMeuMerge);
  // spread operator works on all iterables : Arrays,Sets,Maps,Strings , objects are not iterable.
  const str = 'Jonas';
  const letters = [...str, ' ', 'S.']; //the letters of the string is split into character array.
  console.log(letters);

  //spread operator is not usable inside evaluation of template string

  //this function is accepting a 3 variables and instead of sending each element of the array we are spreading the array and which gets stroed in each of the parameter.
  const function1 = function (a, b, c) {
    console.log(a, b, c);
  };
  function1(...arr);

  //from ES-2018 ... (spred operator) works on objects even though objects are not iterables.
  const newResturant = { ...restaurant }; //copy the resturant object into the new object we can also use Object.assign()
  console.log(newResturant);
}

//rest pattern and rest parameters
{
  //looks same as spread operator but works in opposite fashion ,collects multiple element and condenses into an array
  //spread because ... is on right side of '='
  const arr = [1, 2, , ...[3, 4]];
  console.log(arr);
  //rest because '...' is on left side of '='
  const [a, b, ...others] = [1, 2, 3, 4, 5, 6]; //here first two elemetn of the array gets stored in a and b and the remaining array elements gets stored into new  array named others
  //rest opearator is used during deStructering process
  //rest operator will always be at last in the desturctering assignment
  // const [pizza, rissoto, ...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu]; wrong
  //combination of rest operator and spread operator together.
  console.log(a, b, others);
  const [pizza, rissoto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
  ];
  console.log(pizza, rissoto, otherFood);

  //using rest paramter with function , its similar to varargs in java , but difference is when we call the function with multiple params it gets clubbed into an array and collected inside the method

  const f1 = function (...values) {
    console.log(values);
  };

  f1(1, 2, 3);
  f1(1);
  f1(1, 2, 3, 4, 5, 6);

  const sum = function (...values) {
    let s = 0;
    for (let i = 0; i < values.length; i++) {
      s += values[i];
    }
    console.log(`sum is ${s}`);
  };

  sum(1, 2);
  sum(1, 2, 3, 4);

  // we can also send an array to the sum() method but while calling we have to spread the values so that it can be collected and again condensed into an array in the method
  sum(...[7, 8, 9]);
}
//short circuit operator (|| &&)
{
  //in case of || if the first value is truely then seccond expression is not evaluated and first value is returned
  //in case of && if the 1st value/expression is falsey then seccond expression is not evaluated and the 1st value/expression is evaluated and returned

  //nullish coalescing operator(??)
  // in case of ?? operator if the first expression is null or undefined then only it will evaluate the seccond expression else evaluate the 1st expression introduced in ES2020.
  console.log(0 || 10); // 10
  console.log(0 ?? 10); //0

  //logical assignment operator
  //introduced in ES2021
  // ||=(or assignment)  ??=(null coalescing assignment) &&=(and assignment)

  const rest1 = {
    name: 'Capri',
    numGuest: 0,
  };
  const rest2 = {
    name: 'La Piaza',
    owner: 'Giovani',
  };
  // assigning new property based on short circuting
  // rest1.numGuest = rest1.numGuest || 10;
  rest1.numGuest ??= 10; //using logical assignment
  // rest2.numGuest = rest2.numGuest || 10;
  rest2.numGuest ??= 10; //using logical assignment
  console.log(rest1);
  console.log(rest2);
}

//coding challange1
{
  /*
    We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
  */

  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  console.log('----------------------- Assignment 1 ------------------------');

  //1
  const [player1, player2] = game.players;
  //2
  const [gk, ...fieldPlayers] = [...game.players[0]];
  //3
  const allPlayers = [...player1, ...player2];
  //4
  const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
  //5
  const {
    odds: { team1, x: draw, team2 },
  } = game;

  //6
  const printGoals = function (...playerNum) {
    console.log(playerNum);
    console.log(`total goals is ${playerNum.length}`);
  };

  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  console.log(`--------------------------------------------`);
  printGoals(...game.scored);
  //7
  team1 < team2 && console.log('Team 1 is more likely to win');
  team2 < team1 && console.log('Team 2 is more likely to win');
}

//for of loop
{
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  //loops through the content of an iterable in this case an array
  for (const item of menu) {
    console.log(item);
  }
  //in order to get position of each element in array for for of loop we have to call the loop with .entries() method after the array
  //entries()-> Returns an iterable of key, value pairs for every entry in the array
  for (const item of menu.entries()) {
    console.log(item); //[<index>,<content at the index>]
  }
  //since each entry is a [key,value] pair we can use the destructering property inside for of loop while using entries to store key and value in separate constants.
  for (const [key, value] of menu.entries()) {
    console.log(`${key + 1}: ${value}`);
  }
}

//enhanced object literals
{
  // ES6 introduced 3 ways which we can use to define object in object literal format
  //1.if we want to include one object into another object as property we can directly put the variable name of the object we want to include/add into the target object name
  //2. in case of defining function inside an object literal we dont need to use the keyword function anymore just use () with the property name and that property will be function
  //3. we can use expression to evaluate both keys and values inside object literal definition but that has to be enclosed within [].
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const openingHours = {
    [days[0]]: {
      open: 12,
      close: 22,
    },
    [days[2]]: {
      open: 11,
      close: 23,
    },
    [days[days.length - 1]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
  const resturantCopy = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //old method
    //openingHours:openingHours
    //new way
    openingHours, // this will create a new property with the same name as the variable
    //in this method while calling it we are sending the entire object and in the function body we are using the destructering property to destructre the object into variables also we can add default value to this de-structured variable in case the object dont send those property,which is a good programming practice and if dont use can lead to undefined value and hence error.
    //here we dont need to write function keyword automatically orderDeilvery will be a function
    orderDelivery({ time, startIndex = 0, mainIndex = 0, address }) {
      console.log(
        `order recieved! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at time ${time}`
      );
    },
    loggerFunc() {
      console.log('hello world!!');
    },
  };
}
//optional chaining (?.)
{
  //the optional chaning is used to check the left side of a . operation has value or not if it has value(not undefined or null) then the . operator will execute else undefined will be returned
  //its more like an optional check where if not used may lead to error

  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const openingHours = {
    [days[0]]: {
      open: 12,
      close: 22,
    },
    [days[2]]: {
      open: 11,
      close: 23,
    },
    [days[days.length - 1]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
    func1() {
      return 'hello';
    },
  };
  // console.log(openingHours.mon.open); // will lead to error as days.mon=undefined(Cannot read properties of undefined)
  /*without optional chaining we have to do a if else check
  if (openingHours.sun && openingHours.sun.open) {
    console.log(openingHours.sun.open);
  }*/

  //with optional chaining
  //?. checks if the property to the right of '?' exists if yes then it executes the next property with . else return undefined.
  console.log(openingHours?.mon?.open); //undefined
  console.log(openingHours?.sun?.open); //12

  //using optional check with function
  console.log(openingHours.func1?.()); //hello
  console.log(openingHours.func2?.()); //undefined checks if func2 exists if yes then calls else returns undefined
  console.log(openingHours.func2?.() ?? 'Function does not exists'); //combining with null colescion operator.
}

//looping objects(object keys , values or entries)
{
  //we can loop over objects in various ways by property name,by value ,by entry(property,value paid)
  //loop via property name(keys)
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const openingHours = {
    [days[0]]: {
      open: 12,
      close: 22,
    },
    [days[2]]: {
      open: 11,
      close: 23,
    },
    [days[days.length - 1]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
  //Object.keys(<object_name>) is an inbuild method that returns an array that consists of the keys of the given object passed.
  for (const day of Object.keys(openingHours)) {
    console.log(day);
  }
  //Object.values(<object_name>) is an inbuild method that returns an array that consists of the values of the given object passed.
  //loop via value
  console.log(Object.values(openingHours));

  //Object.entries(<object_name>) this will give an array of entries(key,value) where each element is key,value pair of the object
  console.log(Object.entries(openingHours));
  //example of using destructering inside for of loop where we are looping through the entry set of the given object
  for (const [key, { open, close }] of Object.entries(openingHours)) {
    console.log(`on ${key} we open at ${open} and close at ${close}`);
  }
}
//coding challange 2
{
  /**
   * Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2

   * 
   */

  console.log(
    `------------------------------------ codeing challange 2-------------------------------- `
  );
  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  //1.
  for (const [index, playerName] of Object.entries(game.scored)) {
    console.log(`Goal ${Number(index) + 1} : ${playerName}`);
  }
  //2.
  let sum = 0;
  for (const odd of Object.values(game.odds)) {
    console.log(odd);
    sum += odd;
  }
  const avg = sum / Object.values(game.odds).length;
  console.log(`avergare is ${avg}`);

  //3.
  for (const [key, value] of Object.entries(game.odds)) {
    if (!(key === 'x')) {
      console.log(`Odd of victory ${game[key]}: ${value}`);
    } else {
      console.log(`Odd of draw : ${value}`);
    }
  }
  let scorers = {};
  for (const playerName of game.scored) {
    if (scorers[playerName]) {
      scorers[playerName] = scorers[playerName] + 1;
    } else scorers[playerName] = 1;
  }
  console.log(scorers);
}

//sets
{
  //before js did not had many inbuild data structures but with ES6 new data structres like sets and maps were introduced
  //to create a new set we have to do with new keyword as shown below new set(<iterable>) and pass an array/string/set/map or any iterable inside the constructor parameter.like java sets in javascript also don not allow duplicates and also does not maintain insertion order.
  const arr1 = ['pasta', 'pizza', 'pizza'];
  const set1 = new Set(arr1);
  console.log(set1); //[pasta,pizza]
  const set2 = new Set('Jonas');
  console.log(set2);
  //to check length of set we use  size method on set
  console.log(set1.size);
  //hase() method of set a boolean indicating whether an element with the specified value exists in the Set or not.
  console.log(set1.has('pizza'));
  //to add new element to a set we use the add() method
  set1.add('rissotto'); //Appends a new element with a specified value to the end of the Set.
  set1.add('apple');
  set1.delete('apple'); //Removes a specified value from the Set. @returns Returns true if an element in the Set existed and has been removed, or false if the element does not exist.
  //like array we cannot display an element of set using its index
  console.log(set1[0]); //undefined no matter whatever we pass in the index , in sets there is no indexes and there is no way we can directly get one element from set , we have to always traverse the set
  // to clear a set we use clear() method
  // set1.clear() //
  // as set is iterable so we can use loops to traverse through set.
  for (const val of set1) {
    console.log(val);
  }
  const arr2 = [...set1]; // this will first spread the set and then with the new values create an array containing only unique elements.
  console.log(arr2);
}

//maps
{
  const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
  //like objects data in maps are stored in key,value pairs ,but the big difference between objects and maps are , in objects the keys are basically always string and in maps keys can be of any type.
  // we use the new keyword to create a map
  const resturantMap = new Map();
  //we use the set keyword to add new key,value pair in map and returns the map
  resturantMap.set('name', 'classico Italiano'); //Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
  resturantMap.set(1, 'Frenze, Italy');
  resturantMap.set(2, 'Lisbon, Portugal');
  //since set method of map returns the mao we can use that  for chaining set methods
  console.log(
    resturantMap
      .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
      .set('starterMenu', [
        'Focaccia',
        'Bruschetta',
        'Garlic Bread',
        'Caprese Salad',
      ])
  );

  //to retrive value from set we use the get(<key_name>) method to get value for given key
  /*
  Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
     * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned
   */
  console.log(resturantMap.get('starterMenu'));
  //to check if an element is present we use has()
  console.log(resturantMap.has(1)); // boolean indicating whether an element with the specified key exists or not.
  //resturantMap.clear(); // to clear the map
  //resturantMap.delete(1); // delete the key value pair for the given key
  //if we use object as key then first we should store that object and use the same refference otherwise it will create dumb entires as shown below
  resturantMap.set([1, 2], 'hello');
  console.log(resturantMap.get([1, 2])); //undefiend although we are passing same array in set and get method but inernally those arrays are 2 different object and hence not the same

  const arr = [3, 4];
  resturantMap.set(arr, 'hi');
  console.log(resturantMap.get(arr)); //hi ,also since the key here is an object refference so if we change the or add elements to the array the key will change as the key is not holding the array but a reffeence to the array object.

  //map iteration
  //we can define map and intialize it on the spot as an array of array , where each innner array is an entry having 2 elements key and value
  const question = new Map([
    ['question', 'what is the best programming language in the world'],
    [1, 'Java'],
    [2, 'C++'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'correct🥳'],
    [false, 'Try Again!!'],
  ]);
  //we can also create a map from using Object.entries() on a given object
  console.log(Object.entries(openingHours));
  const map3 = new Map(Object.entries(openingHours)); //the inner object.entires will convert the object into key value entries which will be used to create the map
  console.log(map3);
  console.log(question.get('question'));
  //as map is already list of entries so we can directly use for of loop in the map as Object.entries() for of loop in object shown below
  for (const [key, value] of question) {
    if (typeof key === 'number') {
      console.log(`Anwer is ${key}:${value}`);
    }
  }
  const ans = 3;
  console.log(question.get(question.get('correct') === ans));
  //convert map into array of arrays , if we use spread operator on a map then the result will be an array of arrays as shown below.
  const arrQuestion = [...question];
  console.log(arrQuestion);
  //map also has 3 inbuild methods .entries() which give the entries of the map,.keys()  gives key of map and .values() give values array but all of these gives a mapIterator as output we have to spread the result and store in an array in order to use it.
  console.log([...question.entries()]);
  console.log([...question.keys()]);
  console.log([...question.values()]);
}

//coding challange 3
{
  /*
  
  Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
  
  */

  const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
  ]);
  //1.
  const events = [...new Set(gameEvents.values())];
  console.log(events);
  //2.
  gameEvents.delete(64);

  //3.
  const time = [...gameEvents.keys()].pop();
  console.log(`An event happened, on
  average, every ${time / gameEvents.size} minutes`);
  //4.
  for (const [key, value] of gameEvents) {
    let half = key <= 45 ? `[First Half]` : `[Seccond Half]`;
    console.log(`${half} ${key}: ${value}`);
  }
}

//working with strings
//like in java strings in javascript is also immutable.
{
  const airLine = `Air Asia`;
  const plane = `A320`;

  //As String is stored as an array of character
  console.log(plane[0]);
  console.log(plane[1]);

  //get length of string
  console.log(airLine.length);
  //string methods

  //Returns the position of the first occurrence of a substring. takes 2 parameter @param searchString The substring to search for in the string,@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
  console.log(airLine.indexOf('r'));
  //Returns the last occurrence of a substring in the string.
  console.log(airLine.lastIndexOf('a'));
  // we can also search for entire words
  console.log(airLine.indexOf('Air')); //0
  //but its case sensitive
  console.log(airLine.indexOf('air')); //-1 not found

  /**
   * Returns a section of a string (substring).
   * @param start The index to the beginning of the specified portion of stringObj.
   * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
   * If this value is not specified, the substring continues to the end of stringObj.
   */
  console.log(airLine.slice(2));
  console.log(airLine.slice(3, 6));
  console.log(airLine.slice(0, airLine.indexOf(' ')));
  //providing negative value to slice will result in slice from the end of the array..
  console.log(airLine.slice(-2));
  console.log(airLine.slice(1, -2));
  const checkMiddleSeat = function (seat) {
    //B and E are middle seat
    // const lastCharacter = seat[seat.length - 1];
    const lastCharacter = seat.slice(-1);
    lastCharacter === 'E' || lastCharacter === 'B'
      ? console.log(`${seat} is middle seat`)
      : console.log(`${seat} is not middle seat`);
  };
  checkMiddleSeat('11B');
  checkMiddleSeat('23C');
  checkMiddleSeat('3E');
  //wheneve we call a method on string primitive js automatically behind the scene converts it into object String(Auto Boxing) new String('jonas')
  /** Converts all the alphabetic characters in a string to uppercase. */
  console.log(airLine.toUpperCase());
  /** Converts all the alphabetic characters in a string to lowercase. */
  console.log(airLine.toLowerCase());
  //comparing emails
  const email1 = `hello@jonas.io`;
  const email2 = ' Hello@Jonas.io \n';
  /** Removes the leading and trailing white space and line terminator characters from a string. */
  console.log(email1.trim().toLowerCase() === email2.trim().toLowerCase());
  //replacing
  const priceGB = '288,97£';
  /**
   * Finds the first substring match in a regular expression search.
   * @param regexp The regular expression pattern and applicable flags.
   */
  const priceUS = priceGB.replace('£', '$').replace(',', '.'); //only replace first occurance
  console.log(priceUS);
  //new method introduced in ES2023
  console.log(
    'All passengers please come to boarding door 23 , boarding door 23!!'.replaceAll(
      'door',
      'gate'
    )
  ); //insted of replaceAll we can use regular expressions.
  const plane2 = 'Airbus A320neo';
  /**
   * Returns true if searchString appears as a substring of the result of converting this
   * object to a String, at one or more positions that are
   * greater than or equal to position; otherwise, returns false.
   * @param searchString search string
   * @param position If position is undefined, 0 is assumed, so as to search all of the String.**/
  console.log(plane2.includes('A320'));
  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * position. Otherwise returns false.
   */
  console.log(plane2.startsWith('Air'));
  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * endPosition – length(this). Otherwise returns false.
   */
  console.log(plane2.endsWith('neo'));

  /**
   * Split a string into substrings using the specified separator and return them as an array.
   * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
   * @param limit A value used to limit the number of elements returned in the array.
   */
  console.log('Hello world , How are You, I am fine'.split(',')); //['Hello world ', ' How are You', ' I am fine']

  //padding
  const msg = 'Go to gate 23!!';
  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the start (left) of the current string.
   *
   * @param maxLength The length of the resulting string once the current string has been padded.
   *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
   *
   * @param fillString The string to pad the current string with.
   *        If this string is too long, it will be truncated and the left-most part will be applied.
   *        The default value for this parameter is " " (U+0020).
   */
  console.log(msg.padStart(25, '+')); //++++++++++Go to gate 23!! (added repating '+' in the begining of string to make the final length 25)
  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the end (right) of the current string.
   *
   * @param maxLength The length of the resulting string once the current string has been padded.
   *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
   *
   * @param fillString The string to pad the current string with.
   *        If this string is too long, it will be truncated and the left-most part will be applied.
   *        The default value for this parameter is " " (U+0020).
   */
  console.log(msg.padEnd(25, '+')); //Go to gate 23!!++++++++++ (added repating '+' in the end of string  to make the final length 25)
}
//coding challange 4
{
  /**
   Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
   */

  const convert = function (s) {
    const words = s.split('\n');
    for (const word of words) {
      camelCaseConvertFunction(word);
      // console.log('\n');
    }
  };

  const camelCaseConvertFunction = function (s) {
    let s1 = '';
    if (s.includes('_')) {
      const wordArray = s.split('_');
      for (const [index, word] of Object.entries(wordArray)) {
        if (Number(index) === 0) {
          s1 =
            s1 + word.slice(0, 1).toLowerCase() + word.slice(1).toLowerCase();
        } else {
          s1 =
            s1 + word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
        }
      }
      console.log(s1);
    } else {
      console.log(s);
    }
  };
  convert(`underscore_case
  first_name
  Some_Variable
  calculate_AGE
  delayed_departure`);
  //  camelCaseConvertFunction(`underscore_case`);
  //camelCaseConvertFunction(`Some_Variable`);
}
