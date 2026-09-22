const fs = require("fs");
const a = 100;
console.log(`a : ${a}`);
setImmediate(() => console.log("Set Immediate...!!!"));
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve("Promise...!!!").then((data) => console.log(data));
fs.readFile("./utility/file.txt", "utf-8", (err, data) => {
  setTimeout(() => console.log("2nd Timer"), 0);
  setImmediate(() => console.log("2nd Set Immediate...!!!"));
  process.nextTick(() => console.log("2nd nextTick"));

  console.log("File Reading CB :" + data);
});

process.nextTick(() => console.log("nextTick"));

console.log("Last Line of the code...!!!");

/**
 * Ouput should be:
 * a : 100
 * Last Line of the code...!!!
 * nextTick
 * Promise...!!!
 * setTimeout
 * Set Immediate...!!!
 * File Reading CB : ....
 * 2nd nextTick
 * 2nd Set Immediate...!!!
 * 2nd Timer
 */
