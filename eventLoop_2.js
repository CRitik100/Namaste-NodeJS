const fs = require("fs");

setImmediate(() => {
  setImmediate(() => console.log("Inner set immediate...!!!"));
  console.log("Set Immediate...!!!");
});

setTimeout(() => {
  setTimeout(() => console.log("Inner setTimeout"), 0);
  console.log("setTimeout");
}, 0);
Promise.resolve("Promise...!!!").then((data) => {
  process.nextTick(() => console.log("inner nextTick_2"));
  Promise.resolve("inner Promise...!!!").then((data) => console.log(data));
  console.log(data);
});
fs.readFile("./utility/file.txt", "utf-8", () =>
  console.log("File Reading CB"),
);

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
});

console.log("Last Line of the code...!!!");

/**
 * Ouput should be: Find it.
 */
