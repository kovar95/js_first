// TASK 1
console.log("TASK 1");

var person = {
	name: "Mike",
	age: 28,
	married: true
}

var transformObject = function(someObject){
	someObject.age = 34;
	delete someObject.married;
	console.log(someObject);
}

transformObject(person);

// TASK 2
console.log("TASK 2");

var person = {
	name: "Jack",
	age: 32,
	married: true
}

var children = function(someObject) {
	if (!someObject.children) {
		someObject.children = [
			{ name: "Mario",
			  age: 23,
			  gender: "male"
			},
			{
			  name: "Sonia",
			  age: 34,
			  gender: "female"	
			}
		];
	}
}

children(person);
console.log(person);

// TASK 3
console.log("TASK 3");

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   }
];

var passedExam = function(someObject){
	for (var i = 0; i < students.length; i++) {
		if (students[i].passed) {
			console.log(students[i].name + " passed the exam");
		} else {
			console.log(students[i].name + " didn't pass the exam");
		}
	}
}

passedExam(students);

// TASK 4
console.log("TASK 4");

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   }
];

var repack = function(someObject){
	var names = [], ages = [], passed = [];
	for (var i = 0; i < students.length; i++) {
		names[i] = students[i].name;
		ages[i] = students[i].age;
		passed[i] = students[i].passed;
	}

	someObject[0] = names;
	someObject[1] = ages;
	someObject[2] = passed;
}

repack(students);
console.log(students);

// TASK 5
console.log("TASK 5");

var person = {
	name: "Jack",
	age: 32,
	married: true
};

var newPerson = Object.create(person);

console.log(newPerson.age);


// TASK 6
console.log("TASK 6");

var person = {
	name: "Mike",
	age: 28,
	married: true
}

person.print = function(){
		console.log(this.name + " has " + this.age + " years.");
	};

person.print();

// TASK 7
console.log("TASK 7");

var person = {};

person.addData = function(name, age, married){
		this.name = name;
		this.age = age;
		this.married = married;
	};

person.addData("Peter", 23, true);
console.log(person);
