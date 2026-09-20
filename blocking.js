const crypto = require("node:crypto");

// Asyncronous Function
async function getData() {
  const data = await fetch("https://dummyjson.com/products");
  console.log(`Data from API ${data}`);
}

console.log("Let's Start..!!");

setTimeout(() => {
  console.log("Execute Immediately...!!");
}, 0);

// Calling Async Function.
getData();

// This Password based key derivative syncronous Function.
crypto.pbkdf2Sync("NewPassword", "salt", 50000000, 50, "sha512");
console.log("Sync Key is Generated");

// This Password based key derivative asyncronous Function.
crypto.pbkdf2("MyPassword", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("Async Key is Generated..!!!");
});

console.log("Done...!!!");
