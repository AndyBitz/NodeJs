// prototype & __proto__ 

function Foo() {

	// console.log('call Foo()');

	this.x = 12;

};

Foo.prototype.x = 10;
Foo.prototype.y = 20;
Foo.prototype.z = 30;

function Bar() {

	// console.log('call Bar()');

	this.x = 120;

};

Bar.prototype.x = 100;
Bar.prototype.y = 200;

Foo.prototype = new Bar();

// This will update the new prototype object and overwrite "x" and "y" again.
Foo.prototype.z = 1000;

const foo = new Foo();
const bar = new Bar();

// all are true
/*	console.log(foo.__proto__ === Foo.prototype);
console.log(foo.__proto__.__proto__ === Bar.prototype);
console.log(foo.__proto__.__proto__.__proto__ === Object.prototype);

console.log(Foo.prototype.__proto__ === Bar.prototype);
console.log(Foo.prototype.__proto__.__proto__ === Bar.prototype.__proto__);
console.log(Bar.prototype.__proto__ === Object.prototype);
console.log(Foo.prototype.__proto__.__proto__ === Object.prototype);*/

// Every instance of any Object has a reference to its predecessor.
// This reference is located in the "__proto__" property.
// The "__proto__" property chain is continued until it reaches the end.
// The end will most likly be the "Object" object.
// In conclusion: "prototype" sets the properties of an object,
// whereas "__proto__" is the object it inherits from.
// Also note that "__proto__" references the object itself, not an instance.

// The "new" keyword.
// The "function" "Foo" will not return any value,
// therefore "const foo = Foo()" will result in "undefined".
// However, if "new" is used "const foo = new Foo()",
// "const foo" will be an instance of "Foo".

// As an instance of "Foo", "foo" will not have its own "prototype" property,
// instead it has a "__proto__" property that references "Foo".

// "this" and "prototype".
// "prototype" will set a property that will be available to every instance,
// because every instance will search in "__proto__", the "Foo" object itself,
// if "foo" doesn't have said property.
// However, if "this" is used, like in the constructor of "Foo",
// the property, in this case "x", will not be part of the "Foo" object,
// rather it will belong to every new instance that is created.

// Vice versa every property that is assigned to an instace will belong to that instance,
// not the object itself.

// Whenever an instance tries to access a property it will follow the same procedure.
// First of all it will search for said property in its instance, if it is found, end.
// Is the property not found, it will continue to search in the "__proto__" property,
// and the "__proto__" property of that "__proto__" property, until the end.

// Examples.
// "Foo.prototype.x" is set to "10", in the constructor of "Foo",
// "this.x" is set to "12". "foo.x" will be "12".
// "Foo.prototype.y" is set to "20", "foo.y" will be "20".
// "foo.y" is set to "22", "foo.y" will be "22",
// but "Foo.prototype.y" will still be "20".
// Same applies to function e.g. "toString".
// "foo.toString()" will actually call "Object.toString()"
// or, to be more specific, "foo.__proto__.__proto__.toString()".

// In addition.
// If the "prototype" property itself, rather than a property of it,
// is changed "Foo.prototype = new Bar();",
// the whole "__proto__" object of any new instance,
// will inherit from the instance that was created by "new Bar()".

// This means that "Foo.prototype.x = 10" etc. will not be accessible to new instances of "Foo".
// However if the properties are set after the new "prototype", it will be available.
// Basically this means that we assign new values to the instance that "new Bar()" gave us.
// Note that everything that was set on "Bar.prototype" will belong to "Bar",
// everything that is set on "Foo.prototype" will belong to an instance of "Bar"
// since "Foo.prototype" is just an instance of "Bar".
// This also means that "Foo.prototype" inherits from "Bar".

// What is foo.
/*

	foo -> instance of Foo
		Foo -> instance of Bar
			Bar -> inherits from Object
	
	foo.__proto__ === Foo.prototype
	Foo.prototype.__proto__ === Bar.prototype
	Bar.prototype.__proto__ === Object.prototype

*/

// In a nutshell, every object has a "__proto__" property, it inherits from.
// When creating a object you can set the values of "__proto__" with Object.prototype.

// something similiar but probably better
// https://hackernoon.com/nderstand-nodejs-javascript-object-inheritance-proto-prototype-class-9bd951700b29#.faxrthdi4
// also source for the following notes:

/*
[[Prototype]]An object specifies its prototype via the internal property

__proto__ brings direct access to [[Prototype]] to the language(by speakingjs.com).

prototype is the object that is used to build __proto__ when you create an object with new.

prototype is not available on the instances themselves (or other objects), but only on the constructor functions.

prototype is only available on functions since they are copied from Function and Object, but in anything else it is not.
However, __proto__ is available everywhere.
*/

// I might have some erros in here.


// [[Prototype]]

const poo = {
	describe: function() {
		return 'name: ' + this.name;
	}
};

const doo = {
	__proto__: poo,
	name: 'obj'
};

// OR

const Poo = {
	describe: function() {
		return 'name: ' + this.name;
	}
};

const Doo = function() {
	this.name = 'obj';
};

Doo.prototype = Poo;

const doo2 = new Doo();
