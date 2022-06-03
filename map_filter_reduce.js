// map function
let a = [2, 4, 6, 8, 6, 53];
let a1 = a.map((val) => {
  return val * 2;
});

// console.log(a, a1);

// filter function
let b = [2, 4, 6, 8, 7, 53];
let b2 = b.filter((val) => {
  return val > 6;
});
console.log(b, b2);

// Reduce function
let c = [2, 4, 6, 8, 7];
let c2 = c.reduce((val1, val2) => {
  return val1 + val2;
});
console.log(c, c2);
