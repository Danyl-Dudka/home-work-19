// Number 1
let digit = 10369;
const firstDigit = Math.floor(digit / 10000 % 10);
const secondDigit = Math.floor(digit / 1000 % 10);
const thirdDigit = Math.floor(digit / 100 % 10);
const fourthDigit = Math.floor(digit / 10 % 10);
const fifthDigit = Math.floor(digit % 10);

console.log(firstDigit + ' ' + secondDigit + ' ' + thirdDigit + ' ' + fourthDigit + ' ' + fifthDigit);

// Number 2 
const userName = prompt("Enter your UserName");
console.log("Hello, " + userName + "! How are you?");

// Number 3
let userNumber = parseInt(prompt("Enter your number:"));

let firstNumber = Math.floor(userNumber / 100 % 10);
let secondNumber = Math.floor (userNumber / 10 % 10);
let thirdNumber = Math.floor(userNumber % 10);

if (firstNumber === secondNumber && secondNumber === thirdNumber) {
    console.log("You have the same numbers");
} else if (firstNumber === secondNumber || secondNumber === thirdNumber || firstNumber === thirdNumber) {
    console.log("Some numbers in the number are the same");
} else {
    console.log("Your number is correct");
}

