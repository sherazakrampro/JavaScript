const name = "sheraz";
const repoCount = 26;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("sheraz-akram-pk");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   sheraz    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sheraz.com/sheraz%20akram";

console.log(url.replace("%20", "-"));

console.log(url.includes("ahmad"));

console.log(gameName.split("-"));

let myName = "Sheraz Akram";

console.log(myName.toUpperCase());

console.log(myName.toLowerCase());
