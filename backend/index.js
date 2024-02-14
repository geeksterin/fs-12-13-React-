const readline = require("node:readline");
// import readLine from "node:readline";
const fs = require("node:fs");

console.log("A");
fs.readFile("sample.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("B");
  console.log(data.toString());
});

// const data = fs.readFileSync("sample.txt")
console.log("C");

const str = "\nHappy Eid";

fs.writeFile("sample.txt", "Hey there", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

// fs.writeFileSync();
fs.appendFile("sample.txt", str, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

// fs.appendFileSync();

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // const name = prompt("Enter your name");
// let input;
// rl.question("Enter your name ", (name) => {
//     input = name;
//   console.log(name);
//   rl.close();
// });
