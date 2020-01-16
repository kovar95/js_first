
// TASK 1
console.log("TASK 1");

function isOnline(){
	if (this.navigator.onLine) {
		alert("You are online");
	} else {
		alert("You are not online");
	}
}

isOnline();

// TASK 2
console.log("TASK 2");

function reloadPage(){
	this.location.reload();
}

// reloadPage();

// TASK 3
console.log("TASK 3");

function googleMe(){
	setTimeout(function(){
		this.location.href = "http://google.com";
	}, 3000);
}

// googleMe();

// TASK 4
console.log("TASK 4");

function printNumber() {
	var myNumber = 1;
	var myInterval = setInterval(function(){
		console.log(myNumber);
		if (myNumber === 15) {
			clearInterval(myInterval);
		}
		myNumber++;
	}, 1000)
}

printNumber();

// TASK 5
console.log("TASK 5");

function randomNumber(){
	var myNum = Math.ceil(Math.random()*10);
	console.log(myNum);
	return myNum;
}

randomNumber();

// TASK 6
console.log("TASK 6");

var users = [
	{
		name: "Peter",
		age: 23,
		status: "inactive"
	},
	{
		name: "Mike",
		age: 29,
		status: "inactive"
	},
	{
		name: "John",
		age: 53,
		status: "inactive"
	},
	{
		name: "Ron",
		age: 33,
		status: "inactive"
	},
	{
		name: "Jane",
		age: 19,
		status: "inactive"
	}
];

var enteredUser = prompt("Please type your name:");
var loggedInUser;
var index;

if (users.some(function(user,i){
	index = i;
	return user.name === enteredUser;
})) {
	loggedInUser = users[index];
	console.log("You are logged in!");
	loggedInUser.status = "active";
	this.localStorage.setItem("loggedInUser", loggedInUser.name);
	setTimeout(function(){
		this.localStorage.removeItem("loggedInUser");
		console.log("You are logged out!");
		loggedInUser.status = "inactive";
		loggedInUser = undefined;
	}, 60000);
} else {
	console.log("The user with name: '" + enteredUser + "' doesn't exist");
}

// WAY TWO

// loggedInUser = users.filter(function(user){
// 	if (enteredUser === user.name) {
// 		console.log("You are logged in!");
// 		user.status = "active";
// 		return user.name;
// 	} 
// });

// if (loggedInUser.length === 0) {
// 	console.log("The user with name: " + enteredUser + " doesn't exist");
// } else {
// 	this.localStorage.setItem("loggedInUser", loggedInUser[0].name);
// 	setTimeout(function(){
// 			this.localStorage.removeItem("loggedInUser");
// 			console.log("You are logged out!");
// 			loggedInUser[0].status = "inactive";
// 			loggedInUser = undefined;
// 	}, 60000);
// }

