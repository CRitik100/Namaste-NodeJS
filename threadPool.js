const crypto = require("node:crypto");

// How to modify the Thread POOL Size.
process.env.UV_THREADPOOL_SIZE = 11;

console.log("Start");
// This Password based key derivative asyncronous Function.
crypto.pbkdf2("MyPassword", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Async Key is Generated..!!!-1");
});

crypto.pbkdf2("MyPassword", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Async Key is Generated..!!!-2");
});

crypto.pbkdf2("MyPassword", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Async Key is Generated..!!!-3");
});

crypto.pbkdf2("MyPassword", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Async Key is Generated..!!!-4");
});
crypto.pbkdf2("MyPassword", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Async Key is Generated..!!!-5");
});
crypto.pbkdf2("MyPassword", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Async Key is Generated..!!!-6");
});
console.log("End");
