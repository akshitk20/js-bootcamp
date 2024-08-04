function greet(name) {
    console.log(`${name} says Hi`);
}

let value = greet("Akshit");
console.log(value); 

function sum(a, b) {
    let value = a + b;
    return value;
}

let result = sum(1.2, 2.3);
console.log(result);

result = sum("Hi", "There");
console.log(result);

const greeter = function(name) { // anonymous function
    console.log(`${name} says Hello`);
}

greeter("Wayne");

