// // Load a file from disk using readFile and then compress it using the async zlib node library, use a promise chain to process this work.
// const fs = require('fs');
// const zlib = require('zlib');

// function zlib(data) {
//     zlib.gzip(data, (err, result) => {
//         TODO
//     });
// }

// function readFile(filename, encoding) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, encoding, (err, data) => {
//             if (err) reject(err);
//             resolve(data);
//         });
//     });
// }

// Solution
const fs = require('fs');
const zlib = require('zlib');

function gzip(data) {
    return new Promise((resolve, reject) => {
        zlib.gzip(data, (err, result) => {
            if (err) reject(err);
            resolve(data);
        });
  });
}

function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}
readFile("./indssex.js", "utf-8")
    .then( data => {
        gzip(data).then(
            res => console.log(res),
            err => console.error("Failed: ", err),
        )
    }, 
    err => console.error("Failed to Read", err)
);