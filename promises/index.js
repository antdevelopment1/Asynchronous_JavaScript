// We pass a an annonymous function with two parameters resolve and reject
function doAsyncTask() {
  let error = true;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Async work completed.');
      if (error) {
        reject("Rejected");
      } else {
        resolve("Resolved");
      }
    }, 1000);
  }); 
  return promise;
}
doAsyncTask().then(
  (val) => console.log(val),
  (err) => console.log(err)
);


// // Create a promise version of the async readFile function

// const fs = require("fs");

// function readFile(filename, encoding) {
//   fs.readFile(filename, encoding, (err, data) => {
//     //TODO
//   });
// }
// readFile("./files/demofile.txt", "utf-8", () => {
    
// })
// //     .then(...)
// // });