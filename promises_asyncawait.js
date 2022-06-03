// let fs = require("fs");
let fs = require("fs/promises");

let read3 = async (file1, file2, file3) => {
  let a1 = await fs.readFile(file1, "utf-8");
  console.log(a1);
  let a2 = await fs.readFile(file2, "utf-8");
  console.log(a2);
  let a3 = await fs.readFile(file3, "utf-8");
  console.log(a3);
};

// fs.readFile("text.txt", "utf-8", (err, data) => {
//   console.log(err, data);
// });

console.log("this is eof");

read3("file1.txt", "file2.txt", "text.txt");
