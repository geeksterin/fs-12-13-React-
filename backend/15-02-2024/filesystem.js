const path = require("node:path");
const child = require("node:child_process")
const fs = require("node:fs");

const calc = require("divyansh_npmmodule");

console.log("Path MODULE");

// console.log(__filename);

const joinedPath = path.join(__dirname, "a", "b", "sample.txt");
// console.log(joinedPath);

const reoslvedPath = path.resolve("a", "b", "sample.txt");
// console.log(reoslvedPath);

const baseName = path.basename("a/b/sample.txt");
// console.log(baseName);

const extension = path.extname("a/b/sample.js");
// console.log(extension);

const pathInfo = path.parse("x/y/z/a/b/c/users.json");
// console.log(pathInfo);

const normalizedPath = path.normalize("a/b/../../index.js");
// console.log(normalizedPath);

// const filePath = path.resolve("../users.json");
const filePath = path.join(__dirname, "../", "users.json");
// console.log(filePath);

const data = fs.readFileSync(filePath);
// console.log(data.toString());

// child.exec("start code");
child.exec('start https://www.google.co.in/');

const sum = calc.add(10,15);
console.log(sum)