// // Creates a function called do Async task
// function doAsyncTask() {

//   // Sets error to false manually
//   let error = false;

//   // Creates a new Promise and passes the annonomous functions from our .then as parameters
//   // Those annonomous functions take the place of resolve and reject essentially
//   const promise = new Promise((resolve, reject) => {
//     // Inside our function we use a set timeout function to delay the order of execution
//     setTimeout(() => {
//       console.log(resolve + ' I am resolve.');
//       console.log(reject + ' I am reject.');
//       console.log('Async work completed. Step 5');

//       // error is globally set
//       if (error) {
//         // run our annonomous function with "Rejected" as the placeholder for val in our annonmous function
//         reject("Rejected");
//         // otherwise if everything is ok
//       } else {
//         // run our annonomous function with "Resolved" as the placeholder for err in our annonymous function
//         resolve("Resolved.  I am the next to last step. Step number 6. I will now call your function.");
//       }
//     }, 1000);
//   }); 

//   // Step 2 Returned Promise
//   console.log('I am about to return the promise making me number 2.');
//   return promise;

// }

// // Step 1 Function Call
// doAsyncTask(console.log('I am number 1. I am the function call doAsyncTask.'))
// // Step 3 .then()
// .then(
//   (val) => console.log(val + ' I am the last step. I am number 7 and I will now log your result from your function call'), // I will take the place of the resolve parameter when we go inside our promise
//   console.log('I am next number 3. I am an annonomous function and I will take the place of the resolve parameter when we go into our promise'),
//   (err) => console.log(err), // I will take the place of the reject parameter when we go inside our promise
//   console.log('I am next number 4. I am an annonomous function and I will take the place of the reject parameter when we go into our promise')
// );



// Create a promise version of the async readFile function

const fs = require("fs");

function readFile(filename, encoding) {
  console.log(filename + " Step 2");
  console.log(encoding + " Step 3");
  // Both annonymous functions take the place of success and failure
  const promise = new Promise((sucess, failure) => {
    // Passes the file name, encoding type and if the file is returned then from that result it will either be an err or data
    fs.readFile(filename, encoding, (err, data) => {
      console.log('Howdy. I am step 6');
      if (err) {
        failure(err);
      } else {
        sucess(data);
      }
    });
  });
  console.log('Step 4. About to return promise');
  return promise;
}

readFile("index.js", "utf-8", console.log('I am the function call and step 1')).then(
  // console.log('Step 5 Inside .then()'), This line stops promise from continuing
  (sucess) => {console.log("File successfully read", sucess)},
  (failure) => {console.log("Couldn't read file", failure)} 
)
// QUESTION?  Does .then() call the next part of our promise fs.readfile
   
// ========
// Solution
// ========

// Imports 'fs' from node enviornment
// const fs = require("fs");


// // Creates a function called readfile
// function readFile(filename, encoding) {
  
//   const promise = new Promise((sucess, failure) => {

    
//     fs.readFile(filename, encoding, (err, data) => {

//       // If err than we call failure
//       if (err) {
//         failure(err);

//         // Otherwise we call invoke sucess
//       } else {
//         sucess(data);
//       }
//     });
//   });
  
//   return promise;
// }

// // We call readfile and pass a file name and encoding type before we run that code we go into readfile
// readFile("./indexksks.js", "utf-8").then(
//   (sucess) => console.log("File Read", sucess),
//   (failure) => console.log("Failed to Read", failure)
// );
// readFile("./index.js", "utf-8").then(
//   (sucess) => console.log("File Read", sucess),
//   (failure) => console.log("Failed to Read", failure)
// );
