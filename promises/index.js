// // We pass a an annonymous function with two parameters resolve and reject
// function doAsyncTask() {
//   let error = true;
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Async work completed.');
//       if (error) {
//         reject("Rejected");
//       } else {
//         resolve("Resolved");
//       }
//     }, 1000);
//   }); 
//   return promise;
// }
// doAsyncTask().then(
//   (val) => console.log(val),
//   (err) => console.log(err)
// );


// Create a promise version of the async readFile function

const fs = require("fs");

function readFile(filename, encoding) {
  const promise = new Promise((sucess, failure) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) {
        failure(err);
      } else {
        sucess(data);
      }
    });
  });
  return promise;
}

readFile("./indexksks.js", "utf-8").then(
  (sucess) => console.log("File Read", sucess),
  (failure) => console.log("Failed to Read", failure)
);
readFile("./index.js", "utf-8").then(
  (sucess) => console.log("File Read", sucess),
  (failure) => console.log("Failed to Read", failure)
);

// readFile("./files/demofile.txt", "utf-8", () => {
    
// })
//     .then(...)
// });