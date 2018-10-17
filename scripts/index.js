// ====================================================
// Difference Between Asynchronous and Synchronous Code
// ====================================================

// Example of Synchronous Code
contents = readFile('./thefile.txt');
connection = openConnection("host", 8080);
write(contents, connection);
close(connection);
// Example of Asynchronous Code
http.get({path: "..."}, response => {
  let body = ""; 
  response.on("data", part => {
      body += part;
  });
  response.on("end", () => {
      let parsed = JSON.parse(body);
  });
});
console.log("This gets printed first!!!")

// =========================
// Blocking vs. Non Blocking
// =========================

// Pros and Cons of Blocking
// 1.Blocking is Synchronous
// 2.Sychnronous is seemingly easier to code and write applications with
// 3.Synchronous Code is Predicatable

// Pros and Cons of Non-Blocking
// 1.Non blocking is far better for performance
// 2.Non blocking is asynchronous


// ==========================
// Multi Threaded Programming
// ==========================

// 1. Thread are just processes with shared memory
// 2. But if we share memory between threads we risk something called race conditions where different values 
// can be run by the CPU creating varied results
// 3. We can use locks meaning deadlocks and livelocks
// 4. The advantage of thread blocks is another one takes over. The CPU puts its attention to the running thread
// 5. Writing multi threaded code is hard however