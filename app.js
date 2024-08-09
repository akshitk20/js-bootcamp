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