
// TASK 1

var firstNumber = 15;
var secondNumber = -2;
var thirdNumber = 22;
var fourthNumber = 0;
var fifthNumber = 13;

var theLargestNumber = firstNumber;

if (secondNumber > theLargestNumber) {
	theLargestNumber = secondNumber;
}

if (thirdNumber > theLargestNumber) {
	theLargestNumber = thirdNumber;
}

if (fourthNumber > theLargestNumber) {
	theLargestNumber = fourthNumber;
}

if (fifthNumber > theLargestNumber) {
	theLargestNumber = fifthNumber;
}

console.log("The largest of five numbers is number "  + theLargestNumber);

// TASK 2

var multiplierOne = 3;
var multiplierTwo = -7;
var multiplierThree = 2;

var product = multiplierOne * multiplierTwo * multiplierThree;

if (product > 0 ) {
	console.log("Product is positive");
} else if (product < 0) {
	console.log("Product is negative");
} else console.log("Product is zero");

// TASK 3

var x = 1;

switch(x) {
	case 1: console.log("Hello World");
	case 2: console.log("Cao Svete");
	case 3: console.log("Ciao il Mundo");
	case 4: console.log("Hola el Mundo");
	case 5: console.log("Salut le Monde");
}

// TASK 4

var userAge = 25;

var statement;

userAge >= 28 ? statement = true : statement = false;

if (!statement) {
	console.log("User is less than 28 years old");
} else if (userAge > 28) {
	console.log("User is older than 28");
} else {
	console.log("User is 28");
}