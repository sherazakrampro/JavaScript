const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const product = {
  name: "ice cream",
  price: 250,
  isAvailable: true,

  ordericeCream: function () {
    console.log("ice cream is delicious");
  },
};

console.log(Object.getOwnPropertyDescriptor(product, "name"));

Object.defineProperty(product, "name", {
  //writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(product, "name"));

for (let [key, value] of Object.entries(product)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
