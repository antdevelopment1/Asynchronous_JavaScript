
// Problem
// const fs = require("fs");
// const zlib = require("zlib");

// function zlibPromise(data) {
//   zlib.gzip(data, (error, result) => {
//     //TODO
//   });
// }

// function readFile(filename, encoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, encoding, (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
// }

// readFile("./files/demofile.txt", "utf-8")
//     .then(...) // --> Load it then zip it and then print it to screen
// });

// Solution
// pulls in fs from node environment
const fs = require('fs');

// Pulls zlib from node enviornment
const zlib = require('zlib');

// Step 8 Calls gzip function
function gzip(data) {
    console.log('Step 8. My turn');
    return new Promise((resolve, reject) => {
        // Step 11 We call our gzip on zlib and if it can be compressed we run our resolve callback
        zlib.gzip(data, (err, result) => {
            console.log('Step 11 Inside zlib about to compress file');
            if (err) reject(err);
            resolve(result);
        });
        console.log('Leaving our promise. Step 9');
  });
}

// Step Number 2. We go into our function
function readFile(filename, encoding) {
    console.log('Inside our function before going to .this(). Step number 2');
    console.log(`This is the filetype and encoding ${filename}, ${encoding} Look at us. `);

    // Resolve and reject will take two callback functions in the future
    return new Promise((resolve, reject) => {
        // Read file takes three arguments filename, encoding type and an annonynous function
        // By convention we pass err first then the data. This has to be consistent
        console.log(resolve, reject, 'hi'); 
        // We run readfile and wait to see what comes back. If we err then we get error and if we succeed we get data
        fs.readFile(filename, encoding, (err, data) => {
            console.log(resolve, reject);
            console.log('Step 5 Inside our promise with our two annonymous functions dropped off in the resolve and reject parameters');
            // if err then we want to run that annonymous function
            if (err) reject(err);
            // otherwise we want to run resolve on our returned data from readfile
            console.log('Step 6 About to run resolve');
            resolve(data);
            
        });
        // Step 3 Leaving the function with our returned promise
        console.log('Step number 3. Returning our new promise before leaving again.');
    });
    
}

// Step 1 We call our function before we go into our dot then
readFile("./index.js", "utf-8", console.log('Step 1 Function Call'))
    .then(
    // Step 4 Inside our .then() with promise 
    // console.log('Inside our .then() Step 4.'), 
    // We are passing not executing these two annonymous functions to our promise (data and err)
    data => {
        console.log('Step 7 Inside data annoymous function about to call gzip');
        //  Calls gzip on the data before going into .then()
        gzip(data).then(
            // console.log('Step 10 Inside .this()'),
            res => console.log(res + 'Last Step. Im Comeplete'),
            err => console.error("Failed: ", err),
        )
    }, 
    err => console.error("Failed to Read", err)
    );

    // Add extra console logs until the numbers print in order throughout the code.

    // Question:
    // Scope wise how do we get back inside fs readfile?
    // Does a promise expect two functions like will it get pissed if we dont pass it functions internally?
    // How can I percieve data as a annonymous function at this point if its really the data?