var life = 100; // This is my life bar 
life = life - 10;
//var name = "test"; // This is the name displayed

var checkout = false;

console.log(life);

// functions

const name = "Dev Ed";

function adder(num1, num2) {
    console.log(num1+num2);
    console.log("party time");
    console.log("party time");
    console.log("party time");
}

adder(10, 15);

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

const toUpperArrow = () => { // arrow functions
    console.log("Hi");
}

toUpper("name");

// string concatenation
const myAge = 24;
const yourAge = 21;

console.log(myAge+yourAge);

console.log("Hello my name is " + "Akshit");

console.log('Hello it\'s me'); // escaping '

console.log("Hello its me "); // use double quotes

const myName = "Edwin";

console.log(`HEllo my name is ${myName} and my age is ${myAge}`);

const combine = myName + myAge;
console.log(combine);

// if else
const age = 10;

if (age > 18) {
    console.log("You are good to go");
} else {
    console.log("You are not old enough");
}

// == will be true if values are same does not care abt type.  "18" == 18 true
// ==== will be true if values are same and type also is same. 18 === 18 true

const dice1 = 6;
const dice2 = 6;
if (dice1 == 6 && dice2 == 6) {
    console.log("You rolled a double");
} else {
    console.log("You did not");
}