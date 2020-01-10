
// TASK 1
console.log("TASK 1");

var myString = "Lorem ipsum dolor sit amet";

function lower(someString) {
	return someString.toLowerCase();
}

myString = lower(myString);

console.log(myString);

// TASK 2
console.log("TASK 2");

var myWord = "sit";

function checkWord(someString, someWord) {
	if (someString.toLowerCase().includes(someWord.toLowerCase())) {
		console.log("The word -> " + someWord + " <- exists in this string.");
	} else {
		console.log("The word -> " + someWord + " <- doesn't exist in this string.");
	}
}

checkWord(myString, myWord);

// TASK 3
console.log("TASK 3");

// WAY ONE

// this works just fine, but the problem is when the last character is not a  
// letter but some sign, empty space or sth that isn't letter

function lastIndex(someString) {
	return someString.length - 1;
}

// WAY TWO

// this function solves the problem, starting backward, checks if the last char is
// letter, and if isn't, moves backwards looking for the last letter 

function lastLetter(someString) {
	var i = someString.length -1;
	while(someString[i].toLowerCase() === someString[i].toUpperCase()){
		// this will be false for letter, but true for sign
		i--;
	}
	return i;
}

var theLastIndex = lastIndex(myString);
var theLastLetter = lastLetter(myString);

// try to add some sign to the and of myString to see the difference

console.log(theLastIndex, theLastLetter);

// TASK 4
console.log("TASK 4");

function splitString(someString) {
	return someString.split(" ", 3);
}

var mySplitString = splitString(myString);

console.log(mySplitString);

// TASK 5
console.log("TASK 5");

var exampleString = "Piter is an actor.";

var firstLetter = "e";
var secondLetter = "o";

// WAY ONE
console.log("WAY ONE");

// the simpliest way, but just because we know where letters in sentence are
// "o" is after "e", so we can use this function

function simpleReplace(someString, letterOne, letterTwo) {
	someString = someString.replace(letterTwo,letterOne);
	someString = someString.replace(letterOne, letterTwo);
	return someString;
}

exampleString = simpleReplace(exampleString, firstLetter, secondLetter);

console.log(exampleString);

// WAY TWO
console.log("WAY TWO");

// we don't have to know where are letters in sentence, problem above solved

function replaceLetter(someString, letterOne, letterTwo) {
	var temp = "#XY3^&";
	someString = someString.replace(letterOne, temp);
	someString = someString.replace(letterTwo, letterOne);
	someString = someString.replace(temp, letterTwo);
	return someString;
}

var exampleString = "Piter is an actor.";

exampleString = replaceLetter(exampleString, firstLetter, secondLetter);

console.log(exampleString);

// WAY THREE
console.log("WAY THREE");

// the most complicated way, but I think the best. transform string to array, 
// find letter, replace it, and put it back together to string. this will work
// with all letters in string, no matter how many times it appears in string,
// instead of just on first appearance of letter in string - what we had in 
// first and second WAY

function replaceSomeLetter(someString, letterOne, letterTwo) {
	someString = someString.split("");
	someString = someString.map(function(element){
		if(element === letterOne) 
			return element = letterTwo;
		 else if (element === letterTwo) 
		 	return element = letterOne;
		 else return element
		});
	someString = someString.join("");
	return someString;
}

var exampleString = "Piter is an actor and this is one end.";

exampleString = replaceSomeLetter(exampleString, firstLetter, secondLetter);

console.log(exampleString);

// TASK 6
console.log("TASK 6");

// WAY ONE
console.log("WAY ONE");

var someData = [34, 23, 14, 56, 23, 44, 65];

var myNumber = 56;

function dataWithout(someArray, someNumber) {
	someArray = someArray.filter(function(element){
		return element !== someNumber;
	});
	return someArray;
}

someData = dataWithout(someData, myNumber);

console.log(someData);

// WAY TWO
console.log("WAY TWO");

var someData = [34, 23, 14, 56, 23, 44, 65];

var myNumber = 56;

function deleteItem(someArray, someNumber) {
	var indexOfNumber = someArray.indexOf(someNumber);
	someArray.splice(indexOfNumber,1);
	return someArray;
}

someData = deleteItem(someData, myNumber);

console.log(someData);

// TASK 7
console.log("TASK 7");

var someData = [34, 23, 14, 56, 23, 44, 65];

function makeMyArray(someArray) {
	var arrayOne = someArray.slice(1,4);
	var arrayTwo = someArray.slice(4,7).reverse();
	arrayOne = arrayOne.concat(arrayTwo);
	return arrayOne;
}

var otherData = makeMyArray(someData);

console.log(otherData);

// TASK 8
console.log("TASK 8");

var someData = [334, 233, 212, 199, 154, 122];

function reduceArray(someArray) {
	var otherArray = someArray.map(function(element){
		if (someArray.indexOf(element) !== 0) {
			return element - someArray[someArray.indexOf(element)-1];
		} else return element;
	});
	return otherArray;
}

var myNewArray = reduceArray(someData);

console.log(someData, myNewArray);

// TASK 9
console.log("TASK 9");

var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
];

var grade = 8.5;

function bestStudents(someArray, someGrade) {
	var newArray = someArray.filter(function(element){
		return element.avgGrade > someGrade;
	});
	newArray.forEach(function(element) {
		element.avgGrade = element.avgGrade.toFixed(2);
	});
	return newArray;
}

var theBest = bestStudents(students, grade);

console.log(theBest);





// google job task
// find the longest substring in two strings

console.log("TASK google");

// find the longest substring of pairs given below

var str1 = "ABAEDC";
var str2 = "BACBAD";

var str3 = "AGGTAB";
var str4 = "GXTXAYB";

var str5 = "aa";
var str6 = "aaaa";

function oneOfSubs(someArray1, someArray2, someNumber){
	var myStringArray = [];
	var k = 0, l = -1;
	for (var i = someNumber; i < someArray1.length; i++) {
		for (var j = 0; j < someArray2.length; j++) {
			if (someArray1[i] === someArray2[j] && j > l) {
				myStringArray[k] = someArray1[i];
				k++;
				l = j;
				break;
			}
		}
	}
	return myStringArray;
}

function theSub(someString1, someString2){
	var arrayOne = someString1.split("");
	var arrayTwo = someString2.split("");

	console.log("The longest substring of these two arrays: " + arrayOne + " - " + arrayTwo + " is:");

	var outputArray = [];

	for (var i = 0; i < arrayOne.length; i++) {
		outputArray[i] = oneOfSubs(arrayOne, arrayTwo, i);
	}
	
	var max = -Infinity;
	var index = -1;
	outputArray.forEach(function(a, i){
	  if (a.length > max) {
	    max = a.length;
	    index = i;
	  }
	});

	var someOtherString = outputArray.join();
	console.log(outputArray[index]);
}

theSub(str1, str2);
theSub(str3, str4);
theSub(str6, str5);



