
// TASK 1
console.log("TASK 1");

function Student(name, lastName, age, averageGrade) {
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.averageGrade = averageGrade;
}

var peter = new Student("Peter", "Smith", 21, 8.45);
var mike = new Student("Michael", "Johanson", 20, 9.40);
var ricky = new Student("Richmond", "Green", 19, 7.67);
console.log(peter, mike, ricky);

// TASK 2
console.log("TASK 2");

function Player(name, age, goals, yellowCards) {
	this.name = name;
	this.age = age;
	this.goals = goals;
	this.yellowCards = yellowCards;
}

var neca = new Player("Nemanja Vidic", 37, 93, 54);
var michael = new Player("Michael Ballack", 41, 144, 76);
var ron = new Player("Christiano Ronaldo", 34, 311, 63);
console.log(neca, michael, ron);

// TASK 3
console.log("TASK 3");

var players = [
	["Nemanja Vidic", 37, 93, 54], 
	["Michael Ballack", 41, 144, 76], 
	["Christiano Ronaldo", 34, 311, 63]
];

function footballPlayers(player){
	this.name = player[0];
	this.age = player[1];
	this.goals = player[2];
	this.yellowCards = player[3];
}

for (var i = 0; i < players.length; i++) {
	this[players[i][0].toLowerCase()] = new footballPlayers(players[i]);
	// adding console.log just so see result
	console.log(this[players[i][0].toLowerCase()]);
}

// TASK 4
console.log("TASK 4");

function numberOperation(firstNumber, secondNumber, method) {
	this.firstNumber = firstNumber;
	this.secondNumber = secondNumber;
	switch(method){
		case "add" : this.operation = function(){
			return this.firstNumber + this.secondNumber;
		}
		break;
		case "subtract" : this.operation = function(){
			return this.firstNumber - this.secondNumber;
		}
		break;
		case "multiply" : this.operation = function(){
			return this.firstNumber * this.secondNumber;
		}
		break;
		case "divide" : this.operation = function(){
			return this.firstNumber / this.secondNumber;
		}
		break;
		default : break;
	}
}

var firstCase = new numberOperation(31,22,"multiply");
console.log(firstCase.operation());
var secondCase = new numberOperation(22,11,"divide");
console.log(secondCase.operation());
var thirdCase = new numberOperation(55,33,"add");
console.log(thirdCase.operation());
var fourthCase = new numberOperation(67,44,"subtract");
console.log(fourthCase.operation());

// TASK 5
console.log("TASK 5");

// QUESTION 1:

// 	What’s the result of executing this code and why?

		// function test() {
		//    console.log(a);
		//    console.log(foo());
		   
		//    var a = 1;
		//    function foo() {
		//       return 2;
		//    }
		// }

		// test();

// First will be console.logged undefined because "a" is declared after console.log,
// and second will be displayed "2" because we can call function before it was declared 
// if function is not declared as variable

// QUESTION 2:

// 	What is result?

		// var a = 1; 

		// function someFunction(number) {
		//   function otherFunction(input) {
		//     return a;
		//   }
		  
		//   a = 5;
		  
		//   return otherFunction;
		// }

		// var firstResult = someFunction(9);
		// var result = firstResult(2);

// Result is "5", because it's closure. Function otherFunction still has access to 
// variable "a" inside someFunction where value 5 has been assigned to variable "a"

// QUESTION 3:

// 	What is the result of the following code? Explain your answer.

		// var fullname = 'John Doe';
		// var obj = {
		//    fullname: 'Colin Ihrig',
		//    prop: {
		//       fullname: 'Aurelio De Rosa',
		//       getFullname: function() {
		//          return this.fullname;
		//       }
		//    }
		// };

		// console.log(obj.prop.getFullname());

		// var test = obj.prop.getFullname;

		// console.log(test());

// In the first console.log will be displayed 'Aurelio De Rosa' because "this" refers
// to object obj.prop which has property "fullname". In the second case, variable test
// is declared as some function, and when it's called, "this" refers to global window 
// object which has property "fullname" with value of 'John Doe'.

// QUESTION 4:

// 	What will you see in the console for the following example?

		// var a = 1; 
		// function b() { 
		//     a = 10; 
		//     return; 
		//     function a() {} 
		// } 
		// b(); 
		// console.log(a);

// It will be seen just "1" in console. Function "b" does not return anything, and
// function "a" is declared inside function "b" and does nothing and does not have
// any impact outside the function "b". So, we just have variable "a" with value of 1.