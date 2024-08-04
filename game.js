let secretNumber = Math.floor((Math.random() * 100) + 1);
//console.log(secretNumber);

const maxTries = 7;
let tries = 0;
let finished = false;

while (!finished) {
    let userInput = prompt(`Guess number between 1 and 100 try #${tries}`);
    let guess = parseInt(userInput);

    if (isNaN(guess)) {
        alert('You need to enter a number');
    } else {
        tries++;
        if (guess == secretNumber) {
            console.log(`Congrats you got it ${guess}!`);
            finished = true;
        } else if (tries === maxTries - 1) {
            alert(`Sorry you have exhausted tries`);
            finished = true;
        } else if (guess < secretNumber) {
            alert('Too low');
        } else if (guess > secretNumber) {
            alert('Too high');
        }
    }
}

//let userInput = prompt("Please enter your name", '');
//console.log(userInput);

// if (userInput) {
//     console.log(`Got ${userInput}`);
// } else {
//     console.log('Please enter your name'); // falsy values null, ""
// }