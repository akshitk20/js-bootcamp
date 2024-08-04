console.log("Hello world!");
let score = 0;
console.log(score);
score = 6;
console.log(score);
// cannot declare variable twice

let customers; 
console.log(customers); // undefined

customers = 2;
console.log(customers);

const diameter = 5;
console.log(5); // constant

var score2 = 10 ; // old way of declaring variable
console.log(score2); 

let num = 41.3
console.log(num);

let greetings = `Hello there`
console.log(greetings);

let isStudent = false;
console.log(isStudent);

let myCustomers = null;
console.log(myCustomers);

let name = "Sherlock";
let isHome = false;
let age = 20;
let address;
let city = null;

console.log(typeof city);

let s = 6;
s = s + 1;
s = (s/2) * 10;
console.log(s);

let bonus = 10;
s = s + bonus;
console.log(s);

let i = 10;
console.log(typeof i);

let f1 = 10.2
console.log(typeof f1);

let f2 = parseFloat("3.141");
console.log(f2);

let z = parseInt("90201");
console.log(z);

let var1 = 1/0; // print Infinity no run time error is thrown
console.log(var1);

let weird = 10 / "pizza";
console.log(weird);

console.log(Math.PI);

let rand = Math.floor(Math.random() * 10) ;
console.log(rand);

let rand1 = Math.round(Math.random() * 10) ;
console.log(rand1);

// Strings
let greetings1 = "to quote him, \"mumble\"";
console.log(greetings1);

let greetings2 = 'Jim says "Hello"';
console.log(greetings2);

let greetings3 = `hello`;
console.log(greetings3);

let title = "Dr.";
let surname = "Evil";
let fullname = `${title} ${surname}`; // value of variable is substituted in string.
console.log(fullname);

// booleans

let isHappy = true;
let isSad = false;

let score1 = 80;
let attendence = 100;
let passedFinal = score1 > 65;
console.log(passedFinal);

let perfectAttendance = (attendence === 100);
console.log(perfectAttendance);

let award = (passedFinal && perfectAttendance);
console.log(award); 

let notAward = !award;
console.log(notAward);
/*
comments
*/

// conditional
let movieRating = 'PG-13';
let isCustomerAdult = true;

if (movieRating === 'G') {
    console.log('Suitable for all ages');
} else if(movieRating === 'PG') {
    console.log('May require Parental Guidance');
} else if (movieRating == 'PG-13' && isCustomerAdult){
    console.log('Movie is suitable for you');
} else {
    console.log('Not suitable for children');
}

if (movieRating == 'G' || movieRating == 'PG') {
    console.log("suitable for any kid");
} else {
    console.log('Not suitable for children');
}

let r = 1/0;
if (r == Infinity) {
    console.log('Wow infinity!');
}

if (weird == NaN) {
    console.log("ITs NAn"); // nothing will happen
}

if (isNaN(weird)) {
    console.log("Its NAN"); // for NAN comparison
}

let testMe = "99";

if (testMe == 99) {
    console.log('they are equal');
} else {
    console.log('they are not equal');
}

let testMe1 = true;
if (testMe1 == 1) {
    console.log('they are equal');
} else {
    console.log('they are not equal');
}

let pizza = "pizza";
let order = 3 + pizza; // concatenate
console.log(order);

let pizza1 = "pizza";
let order1 = 3 * pizza1;
console.log(order1); // NAN


// loops
// let x = 0;
// while (x < 10) {
//     console.log(x);
//     x = x + 1;
// }

// for (let x = 0 ; x < 10 ; x++) {
//     console.log(x);
// }

// objects
const car = {
    make: "Chevy",
    model : "Bel Air",
    year : 1957,
    speed : 0,
    started : false,
    start() {
        if (!this.started) {
            this.started = true;
            console.log(`The car ${car.year} ${car.make} ${car.model} is starting`);
        } else {
            console.log(`The car ${car.year} ${car.make} ${car.model} has already started`);
        }
    },
    stop : function() {
        if (this.started) {
            this.started = false;
            this.speed = 0;
            console.log(`The car ${car.year} ${car.make} ${car.model} has stopped`);
        } else {
            console.log(`The car ${car.year} ${car.make} ${car.model} has not started`);
        }
    },
    drive(speed) {
        if (this.started) {
            this.speed = speed;
            console.log(`The car ${car.year} ${car.make} ${car.model} is driving with ${car.speed}`);
        } else {
            console.log('You need to start the car first!!');
        }
    }
};

console.log(car);
console.log(`car is a ${car.year} ${car.make} ${car.model}`);

if (2024 - car.year > 25) {
    console.log('Car is an antique!')
}

car.speed = 100;
console.log(`The car ${car.year} ${car.make} ${car.model} is travelling at ${car.speed}`);

car.passengers = 2;
car.start();
car.start();
car.stop();
car.stop();

car.start();
car.drive(90);
car.stop();
car.drive(90);

// strings
let str = "Hello word";
console.log(str.length);

let upper = str.toUpperCase();
console.log(upper);
console.log(str);

let sliced = str.slice(0,5);
console.log(sliced);

let str2 = "Hello World World";
let replaced = str2.replace("World", "Class");
console.log(replaced);

// arrays
const values = [10,20,30,15,20];
console.log(values);

let value = values[0];
console.log(value);

let len = values.length;
console.log(len);

values[len] = 7;
console.log(values);

values.push(399);
console.log(values);

let end = values.pop();
console.log(end);
console.log(values);

let start = values.shift();
console.log(start);
console.log(values);

// values[3] = [98,99];
// console.log(values);

// value = values[3][1];
// console.log(value);

// let cars = {make: "Chevy", model: "Bel Air"};
// values[4] = cars;
console.log(values);

let sum = 0;

for (let i = 0 ; i < values.length ; i++) {
    sum += values[i];
}

console.log(sum);