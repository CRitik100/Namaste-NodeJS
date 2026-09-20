const fs = require("fs");
const https = require("https");

console.log("Hello Dunia");

https.get("https://dummyjson.com/products", (res) => {
  console.log(`Fetched Data Succefully...!!! Status Code : ${res.statusCode}`);
  res.resume();
});

setTimeout(() => {
  console.log("This is from SetTime Out after waiting for 5 Sec");
}, 5000);

fs.readFile("./utility/file.txt", "utf-8", (err, data) => {
  console.log("File Data : ", data);
});

function multiply(x, y) {
  const result = x * y;
  return result;
}

let z = multiply(11, 33);
console.log(
  `Now JS Engine executing the last line Independently, multiplicaton result ${z}`,
);
