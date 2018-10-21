// Convert the previous code so that it now chains the promise as well.
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
readFile("./index.js", "utf-8")
    .then( 
        data => {
            return gzip(data)
        }, 
        err => console.error("Failed to Read", err)
)
.then(
    data => {
        console.log(data);
    },
    err => console.error("Failed to Gzip: ", err),
);