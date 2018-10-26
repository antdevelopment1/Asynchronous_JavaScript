const fs = require('fs');

function Fromise(callback) {
    // These are internal to our Fromise class.
    // In real life, they switch the state from pending to resolved or rejected.
    let res = (d) => {
        console.log('here is the data. yay');
        console.log(d);
    };
    let rej = (d) => {
        console.log('boo. error');
        console.log(d);
    };
    console.log('about to run our callback');

    // We pass res and rej to the callback so that the programmer can 
    // customize what happens when the state switches from pending to resolved or rejected.
    callback(res, rej);

    // Note that the callback is called *immediately* as part of calling `new Fromise`
    // because that is just part of the body of the Fromise function.


    console.log('yep. we ran that callback');

    // Ignore this. I was being dumb.
    // return new Promise((res, rej) => {});
}

function readFile(fname, enc) {
    console.log('Step 1');
    let p = new Fromise((res, rej) => {
        console.log('Step 2');
        fs.readFile(fname, enc, (err, data) => {
            console.log('Inside callback to readFile');
            if (err) {
                console.log('Got an error');
                rej(err);
            }
            console.log(res);
            res(data);
        })
    });
    console.log('Step 3');
    return p;
}

readFile('promise.js', 'utf-8')