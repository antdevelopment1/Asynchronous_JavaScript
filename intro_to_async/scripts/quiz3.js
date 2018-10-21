// Question 3
// Instead of passing it up the stack throw it instead and try to catch it later on.

const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    if (err) throw err;
    next(data);
  });
}
// Hint use try..catch
readFileThenDo(data => {
  console.log(data);
});

// Question #3 Soultion
// We can't use try catch with asynchronous javascript code. Trick question.
const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    // if (err) throw err;
    next(err, data);
  });
}
// Hint use try..catch
readFileThenDo((err, data) => {
  console.log(err, data);
});
