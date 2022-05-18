// Complete the solution so that it reverses the string passed into it.

// function solution(str) {
//   return str.split("").reverse().join("");
// }

// const solution = (str) => str.split("").reverse().join("");

const solution = (s) => [...s].reverse().join("");

console.log(solution("hello"));
