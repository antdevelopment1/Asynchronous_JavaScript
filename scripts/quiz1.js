// Make it run without errors but you cannot 
// change the location of the let statement, that 
// has to stay at the end.

// function doAsyncTask(cb) {
//   cb();
// }
// doAsyncTask(_ => console.log(message));

// let message = "Callback Called";

function doAsyncTask(cb) {

    // Uses the set immediate function to delay the callback being called.
    // This then allows us to run the following line of code in the background
    // let message is able to run and then we call our callback. Since let me is now in
    // memory the code runs.
    setImmediate(() => {
        cb();
        console.log("Callback called!!!");
    });
}

doAsyncTask( () => {
    console.log(message);
})

let message = "Message Callback Called";









