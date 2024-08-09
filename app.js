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

const toUpper = () => {
    console.log("Hi");
}