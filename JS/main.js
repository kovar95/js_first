// js-array-funkcije-objekti-domaci
console.log("js-array-funkcije-objekti-domaci");

// TASK 1
console.log("TASK 1");

var myArray = [
	[[1],[2],[3]],
	[[4],[5],[6]],
	[[7],[8],[9]]
];

for (var i = 0; i < myArray.length; i++) {
	for (var j = 0; j < myArray[i].length; j++) {
		console.log("At position " + i + ", subposition " + j + ", value is " + myArray[i][j][0]);
	}
}

// TASK 2
console.log("TASK 2");

Object.prototype.nameAge = function() {
	console.log("I am " + this.name + ", and I have " + this.age + " years.");
}

var students = [
	{
		name: "Jack",
		age: 32
	}, 
	{
		name: "Tom",
		age: 30
	}, 
	{
		name: "Peter",
		age: 21
	}
];

for (var i = 0; i < students.length; i++) {
	students[i].nameAge();
}

// js-array-funkcije-objekti-vezbanje
console.log("js-array-funkcije-objekti-vezbanje");

// TASK 1
console.log("TASK 1");

// WAY 1
console.log("WAY 1");

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

var repackObject = function(someObject) {
	var newObject = {};
	for (var i = 0; i < Object.keys(someObject).length; i++) {
		newObject[someData[Object.keys(someData)[i]]] = someData[Object.keys(someData)[i]];
	}
	return newObject;
}

var repackedObject = repackObject(someData);
console.log("New object:")
console.log(repackedObject);

// WAY 2
console.log("WAY 2");

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

var repackMe = function(someObject) {
	var newObject = {};
	for (var eachProperty in someObject) {
		if (someObject.hasOwnProperty(eachProperty)) {
			newObject[someData[eachProperty]] = someData[eachProperty];
		}
	}
	return newObject;
}

var repackedObject = repackMe(someData);
console.log("New object:")
console.log(repackedObject);

// TASK 2
console.log("TASK 2");

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

var makeArray = function(someArray) {
	var newArray = [];
	for (var i = 0; i < someArray.length; i++) {
		newArray = newArray.concat(someArray[i]);
	}
	return newArray;
}

var singleElementsArray = makeArray(someData);
console.log("New array:")
console.log(singleElementsArray);

// TASK 3
console.log("TASK 3");

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

var joinArrays = function(arrayOne, arrayTwo) {
	arrayOne = arrayOne.concat(arrayTwo);
	return arrayOne;
}

var justSubarrays = function(someArray) {
	var newArray = [];
	for (var i = 0; i < someArray.length; i++) {
		if(Array.isArray(someArray[i])){
			newArray = joinArrays(newArray, someArray[i]);
		}
	}
	return newArray;
}

var mySubarrays = justSubarrays(someData);
console.log("New array:")
console.log(mySubarrays);


// TASK 4
console.log("TASK 4");

// way 0ne
console.log("WAY ONE");
// if we want to return anonimus function directly from main function, 
// we can use someObject there, because someObject is in main function scope

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

var checkName = function(someObject) {
	if (someObject.name) {
		return function(){
			delete someObject.name;
		}
	} else {
		return function(someName){
			someObject.name = someName;
		}
	}
}

// this is good way but we don't need to use and return function here, just simply
// add or delete property

var myName = "Stefan";
checkName(someData)(myName);
console.log("New object:")
console.log(someData);

// way Two
console.log("WAY TWO");
// if we want to return and call some external function, we must pass parameters 
// for that external function

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

var removeName = function(myObject) {
	delete myObject.name;
}

var addName = function(myObject, myName) {
	myObject.name = myName;
}

var checkingName = function(someObject) {
	if (someObject.name) {
		return removeName;
	} else {
		return addName;
	}
}

checkingName(someData)(someData, myName);
console.log("New object:")
console.log(someData);

// TASK 5
console.log("TASK 5");

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

someData.checkName = function() {
	if (this.name) {
		var name = this.name;   /* BONUS */
		this.removeName = function(){
			delete this.name;
			console.log(this);
			this.addName = function(){
				// this.name = "Mike";
				this.name = name;  /* BONUS */
				console.log(this);
			};
			this.addName();
		};
		this.removeName();
	}
}

someData.checkName();