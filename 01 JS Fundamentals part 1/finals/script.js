/*
let js = 'amazing';
if (js === 'amazing') alert("JavaScript is FUN!!")
console.log(40 + 8 + 23 - 10);
let firstName = 'Jonas';
console.log(firstName);
*/

let javaSCriptIsFun = true;
console.log(javaSCriptIsFun);
console.log(typeof (javaSCriptIsFun));
console.log(typeof (123.45));
console.log(typeof ('Hello world!!'));
javaSCriptIsFun = "yes!";
console.log(javaSCriptIsFun);



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);



const inputString = `1991`;
console.log(inputString + 18);// 199118 as inputString is a string type data so it will use + as concat operator
console.log(Number(inputString) + 18);// here  by using the Number() we are doing type conversion from string to number and hence result will be 2009.
console.log(String(1234));



//type coercion
console.log("i am " + 23 + "years old"); // here js is automatically converting 23 which is a number to string via + concat operation.

console.log('23' - '10' - 3); //here js will use type coercion from string to number 
console.log('23' + '10' + 3); // but here it will do type coercion from number to string as + will be used as concat operation not arithemetic sum.

console.log('23' * 3); //  here js will convert from string to number 

let n = '1' + 1;// it will result in 11
n = n - 1;// here n which was string 11 in the above line will be automatically converted to number 11 for - operation 
console.log(n)// 10


console.log(2 + 3 + 4 + '5');//95 (2+3+4)=9 this is arithmetic addition but last + with '5 will be string concatination
console.log('10' - '4' - '3' - 2 + '5')//15 here ('10' - '4' - '3'  -2 )is arithemtic subtraction resulting in 1 and then +'5' is string concatination resulting in 15



//switch cases

let day = prompt("enter day");
day = day.toLowerCase();
switch (day) {
    case 'monday'://day==='monday'
        console.log("First day of the week ");
        break;
    case 'tuesday':
        console.log("Seccond day of the week");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Mid of week");
        break;
    case 'friday':
        console.log("Week end!!");
        break;
    case 'saturday':
    case 'sunday':
        console.log("holiday!!")
        break;
    default:
        console.log("Not valid day");

}