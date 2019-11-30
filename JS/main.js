
// TASK 1
console.log("TASK 1");

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = 0; i < dataOld.length; i++) {
	dataNew[i] = dataOld[i];
}

console.log(dataNew);

// TASK 2
console.log("TASK 2");

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = dataOld.length -1 ; i >= 0; i--) {
	dataNew[dataOld.length -1 - i] = dataOld[i];
}

console.log(dataNew);

// TASK 3
console.log("TASK 3");

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];
var newLength = dataNew.length;
var extendedLenght = dataOld.length + dataNew.length;

for (var i = newLength; i < extendedLenght ; i++) {
	dataNew[i] = dataOld[i - newLength];
}

console.log(dataNew);

// Razlog zasto nisam koristio vrednsti za duzinu nizova direkto u petlji je zato
// sto bi se kroz petlju ta vrednost menjala i nastala bi beskonacna petlja

// TASK 4
console.log("TASK 4");

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var aLength = a.length;
var extendedLenght = a.length + b.length;

for (var i = aLength; i < extendedLenght ; i++) {
	a[i] = b[i - aLength];
}

console.log(a);

// TASK 5
console.log("TASK 5");

var a = [12, 56, 32, 44];
var b = [88, 7, 13];
var c = [];

var cLength = a.length + b.length;
var j = 0;
var k = 0;

for (var i = 0; i < cLength; i++) {
	if (i % 2 === 0) {
		c[i] = a[j];
		j++;
	} else {
		c[i] = b[k];
		k++;
	}
}

console.log(c);

// TASK 6
console.log("TASK 6");

var niz = ["*"];

for (var i = 0; i < 6; i++) {
	console.log(niz[0]);
	niz[0] += "*";
}

// TASK 7
console.log("TASK 7");

var niz1 = ["*", "*"];

for (var i = 0; i < 10; i++) {
	niz1[0] += "*";
}

for (var i = 1; i < 10; i++) {
	niz1[1] += " ";
}
niz1[1] += "*";

console.log(niz1[0])
console.log(niz1[1]);
console.log(niz1[1]);
console.log(niz1[1]);
console.log(niz1[1]);
console.log(niz1[0]);

// Ovo prikazivanje na kraju je moglo u for petlji, medjutim, meni u browser-u
// prikaze samo jedan niz1[1] i pored broj 4, kao da se 4 puta ponavlja isto, 
// i zato se pattern ne ispisuje kako treba da izgleda

