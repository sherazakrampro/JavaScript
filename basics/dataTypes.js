"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high

console.log("Hitesh");

let name = "hitesh";
let age = 18;
let isLoggedIn = false;
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn1 = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Memory Types in JS
// Stack (Primitive), Heap(Non-primitive)

// Stack Example
let myChannelName = "Learn With Sheraz";

let anotherChannelName = myChannelName;

anotherChannelName = "Learn With Ahmad";

console.log(myChannelName);

console.log(anotherChannelName);

// Heap Example
let userOne = {
  name: "sheraz",
  age: 36,
};

let userTwo = userOne;

// this statement will change the name property of userOne also
userTwo.name = "ahmad";

console.log(userOne);

console.log(userTwo);
