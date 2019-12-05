
// Fourth homework
console.log("Fourth homework");

// TASK 1
console.log("TASK 1");

var reverseArray = function(normalArray) {
	/* check if array has elements */
	if(normalArray.length) {  	
		/* check if array has one element - no need for going throught loop */
		if (normalArray.length === 1) { 
			console.log("This array has only one element");
		} else {
			var reversedArray = [];
			for (var i = 0; i < normalArray.length; i++) {
				reversedArray[i] = normalArray[normalArray.length -1 - i];
			};
			return reversedArray;
		}	
	} else {
		console.log("This array has no elements");
	}	
}

var myArray = [33, 11, 56, 78, 23];
var someReversedArray = reverseArray(myArray);
console.log("The reversed array:");
console.log(someReversedArray);

// TASK 2
console.log("TASK 2")

var printType = function(something) {
	console.log("This element is " + typeof something);
};

printType(myArray);
printType(33);
printType("Peter");

// TASK 3
console.log("TASK 3");

var theLongest = function(someStringArray) {
	if (someStringArray.length) {
		var theLongestString = someStringArray[0].length;
		for (var i = 1; i < someStringArray.length; i++) {
			if (someStringArray[i].length > theLongestString) {
				theLongestString = someStringArray[i].length;
			};
		};
		return theLongestString;
	} else {
		console.log("This array has no elements");
	}	
};

var stringArray = ["John", "Leo", "Peter", "Jonatan", "Tom", "Alex"];
var theLongestInArray = theLongest(stringArray);
console.log("The longest string in array has " + theLongestInArray + " characters.");

// TASK 4
console.log("TASK 4")

var numberArray = [33,12,44,56,21,46,3,5,11];

// method 1 - I've made two separate functions and merged into one main
console.log("method 1");

var secondGreatest = function(someNumberArray){
	if(someNumberArray.length > 1){
		var first,second;
		first = second = someNumberArray[0];
		for (var i = 0; i < someNumberArray.length; i++) {
			if (someNumberArray[i] > first) {
				second = first;
				first = someNumberArray[i];
			} else if (someNumberArray[i] > second && someNumberArray[i] !== first) {
				second = someNumberArray[i];
			}
		}
		console.log("The second greatest number in array is " + second);
	} else {
		console.log("This array has less than two elements");
	}
	
}

var secondLowest = function(someNumberArray){
	if(someNumberArray.length > 1){
		var first,second;
		first = second = someNumberArray[0];
		for (var i = 0; i < someNumberArray.length; i++) {
			if (someNumberArray[i] < first) {
				second = first;
				first = someNumberArray[i];
			} else if (someNumberArray[i] < second && someNumberArray[i] !== first) {
				second = someNumberArray[i];
			}
		}
		console.log("The second lowest number in array is " + second);	
	} else {
		console.log("This array has less than two elements");
	}	
}

var secondNumbers = function(someNumberArray) {
	secondGreatest(someNumberArray);
	secondLowest(someNumberArray);
}

secondNumbers(numberArray);

// method 2 - more simple but more iterations
console.log("method 2");

var mySecondNumbers = function(someArray){
	/* making new array that has elements like received array */
	if (someArray.length > 1) {  
		var myNewArray = [];
		for (var i = 0; i < someArray.length; i++) {
			myNewArray[i] = someArray[i];
		}
		/* simply sorting array */
		for (var i = 0; i < myNewArray.length; i++) {  
			for (var j = 0; j < myNewArray.length - 1; j++) {
				if (myNewArray[j] > myNewArray[j + 1]) {
					var temp = myNewArray[j + 1];
					myNewArray[j + 1] = myNewArray[j];
					myNewArray[j] = temp;
				}
			}
		} 
		/* and console.log the second greatest and the second lowest */  
		console.log("The second greatest number is " + myNewArray[myNewArray.length - 2]);
		console.log("The second lowest number is " + myNewArray[1]);	
	}	
}

mySecondNumbers(numberArray);

// TASK 5
console.log("TASK 5");

var bigger = function(someArray, someNumber) {
	if (someArray.length) {
		var j = 0;
		var biggerArray = [];
		for (var i = 0; i < someArray.length; i++) {
			if (someArray[i] > someNumber) {
				biggerArray[j] = someArray[i];
				j++;
			}
		}
		console.log("New array is:")
		console.log(biggerArray);	
	}
}

var biggerThen = function(someArray, someNumber){
	bigger(someArray, someNumber);
}

var myNumber = 15;

biggerThen(numberArray, myNumber);

// // TASK 6
// console.log("TASK 6")

// var theLowestNumberInArray = function(someArray) {
// 	var theLowest = someArray[0];
// 	for (var i = 0; i < someArray.length; i++) {
// 		if (someArray[i] < theLowest) {
// 			theLowest = someArray[i];
// 		} 
// 	}
// 	return theLowest;
// }

// var theHighestNumberInArray = function(someArray) {
// 	var theHighest = someArray[0];
// 	for (var i = 0; i < someArray.length; i++) {
// 		if (someArray[i] > theHighest) {
// 			theHighest = someArray[i];
// 		} 
// 	}
// 	return theHighest;
// }

// var multipleHighestAndLowest = function(someArray) {
// 	var theHighest = theHighestNumberInArray(someArray);
// 	var theLowest = theLowestNumberInArray(someArray);
// 	var multipleNumbers = theHighest * theLowest;
// 	console.log("The product of highest and lowest number is: " + multipleNumbers);
// }

// multipleHighestAndLowest(numberArray);

// // TASK 7
// console.log("TASK 7");

// var arrayOfNumbers = [15,35,46,23,15,17,23,24,35,12,72,64,35,22,64];

// // in the main function i will already sort the array i ascending order so the biggest will be the last
// var deleteBiggest = function(someUniqueArray){
// 	someUniqueArray.length = someUniqueArray.length - 1;
// }

// var findUnique = function(someArray, someFunction){
// 		if (someArray.length > 1) {
// 			var myNewArray = [];
// 			var finalArray = [];

// 			/* copying elements in new array */
// 			for (var i = 0; i < someArray.length; i++) { 
// 				myNewArray[i] = someArray[i];
// 			}

// 			/* sorting array */
// 			for (var i = 0; i < myNewArray.length; i++) { 
// 				for (var j = 0; j < myNewArray.length - 1; j++) {
// 					if (myNewArray[j] > myNewArray[j + 1]) {
// 						var temp = myNewArray[j + 1];
// 						myNewArray[j + 1] = myNewArray[j];
// 						myNewArray[j] = temp;
// 					}
// 				}
// 			}
// 			console.log("Ordered array ");	
// 			console.log(myNewArray);

// 			/* creating array of unique elements */
// 			var k = 0;	        
// 			for (var i = 0; i < myNewArray.length; i++) {
// 				if (myNewArray[i] !== myNewArray[i - 1] && myNewArray[i] !== myNewArray[i + 1]) {
// 					finalArray[k] = myNewArray[i];
// 					k++;
// 				}
// 			}
// 			console.log("Uniqe elements: ");
// 			console.log(finalArray);

// 			someFunction(finalArray);
// 			console.log("Deleted biggest: ");
// 			console.log(finalArray);
// 	}	
// }

// findUnique(arrayOfNumbers, deleteBiggest);