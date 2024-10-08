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

// arrays

const schedule = ['wake up', 'eat', 'film a video', 'watch stuff on netflix'];

console.log(schedule);

console.log(schedule[0]);

schedule.push('new value got added');
console.log(schedule);

const film = schedule.indexOf('film a video');
console.log(film);


// objects and keyword this
// function attach to objects are methods
// this refers to current object
const user = {
   name : "Akshit",
   age: 24,
   married: false,
   purchase : ['phone', 'car', 'laptop'],
   sayName: function() {
    console.log(this.name);
   }
}


console.log(user.purchase);
user.sayName();

// for loop while loop

const names = ['Ed', 'Johm', 'Maria', 'Eliza', 'Burrito', 'Harry', 'Potter'];
for(n of names) {
    console.log(n);
    if (n === 'Maria') {
        console.log(`${n} is in my list`);
        break;
    }
}

let loading = 0;
while(loading < 10) {
    console.log('Website is loading')
    loading++
}

// DOM manipulationn

const text = document.querySelector('.title'); // grab the h1
const changeColor = document.querySelector('.changeColor')

text.style.color = 'red';

text.style.backgroundColor = 'black';

text.classList.add("change");

// changeColor.addEventListener("click", function() {
//     text.classList.toggle("change");
// });

const nameList = document.querySelector('.name-list');
console.log(nameList);

// for(u of nameList) {
//     //console.log(user);
//     u.addEventListener('click', function() {
//         console.log(this);
//         this.style.color = 'red';
//     })
// }

const listInput = document.querySelector('.list-input');
const addListBtn = document.querySelector('.addListBtn');

addListBtn.addEventListener('click', function() {
    // create an li
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(listInput.value);
    console.log(listInput.value);
    
    // add input value inside new li
    newLi.appendChild(liContent);

    // attach li to nameList
    nameList.appendChild(newLi);
});