// Question 5
// Create some code that tries to read from the disk and times out if it takes longer than 1 second use 'Promise.race'

// function readFakeFile(sleep) {
//     return new Promise(resolve => setTimeout(resolve, sleep));
// }


// readFakeFile(5000)

// Solution
function readFakeFile(sleep) {
    return new Promise(resolve => setTimeout(resolve, sleep, 'read'));
} 

function timeout(sleep) {
    // Nice thing about setTimeout is if you pass more than two arguments the third argument will get passed in as out reject value. 
    // Why?
    // Why pu t the underscore here. Why not just have reject by itself like we did for resovle
    return new Promise((_, reject) => setTimeout(reject, sleep, 'Error: \ntimeout'));
}
Promise.race([readFakeFile(5000), timeout(1000)])
  .then(data => console.log(data))
  .catch(err => console.log(err))

