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
let movieRating = 'PG'
if (movieRating === 'G') {
    console.log('Suitable for all ages');
} else if(movieRating === 'PG') {
    console.log('May require Parental Guidance');
} else if (movieRating == 'PG-13'){
    console.log('Parents strongly cautioned. ');
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