// let myName = "sheraz     "
// let mychannel = "youtube     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.sheraz = function () {
  console.log(`sheraz is present in all objects`);
};

Array.prototype.heySheraz = function () {
  console.log(`Sheraz says hello`);
};

// heroPower.sheraz()
// myHeros.sheraz()
// myHeros.heySheraz()
// heroPower.heySheraz()    // it will give an error because we are trying to access the prototype of an Array in an Object

// inheritance
const User = {
  name: "sheraz",
  email: "sheraz@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // referencing to TeachingSupport; TASupport can access all properties of the TeachingSupport
};

Teacher.__proto__ = User; // referencing to User; Teacher in access all properties of the User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); // referencing to Teacher; TeachingSupport can access all the properties of the Teacher
let anotherUsername = "LearnJavaScript     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"sheraz".trueLength();
"iceCream".trueLength();
