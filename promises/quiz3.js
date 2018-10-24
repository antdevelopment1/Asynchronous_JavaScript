// Convert the previous code so that it now chains the promise as well.
const fs = require('fs');
const zlib = require('zlib');


function gzip(data) {
    console.log('Step 7');
    return new Promise((resolve, reject) => {
        zlib.gzip(data, (err, result) => {
            console.log('Step 9');
            if (err) reject(err);
            resolve(result, console.log('Step 10'));
        });
        console.log('Step 8');
  });
}


function readFile(filename, encoding) {
    console.log('Step 2');
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            console.log('Step 5');
            if (err) reject(err);
            resolve(data);
        });
        console.log('Step 3');
    });
}
readFile("./index.js", "utf-8", console.log('Step 1'))
    
    .then( 
        // console.log('Step 4'),
        data => {
            console.log('Step 6');
            return gzip(data)
        }, 
        err => console.error("Failed to Read", err)
)
.then(
    data => {
        console.log('Step 11');
        console.log('Last Step', data);
    },
    err => console.error("Failed to Gzip: ", err),
);

// Why have the first .then be nested inside readfile. Why not chain them all after readfile?