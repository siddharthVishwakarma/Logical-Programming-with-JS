// Spread Operator and deconstructer

arr = [1, 3, 5, 4, 6];
let avg = (a, b, c) => {
  return a + b + c / 3;
};
console.log(avg(...arr));

// To extend the array
let xyz = [2, 4, 5, ...arr, 3];
console.log(xyz);

// To extend the object
let obj1 = {
  name1: "Siddharth",
  company: "eClinicals",
  Position: "Software Speciliast",
};
let obj2 = { ...obj1, company: "Google" };
console.log(obj2);

// Destructing
let { name1, company, Position } = obj1;

console.log(name1);
