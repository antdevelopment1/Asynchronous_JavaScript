Question:
// Create a process flow which publishes a file from a server, then realises the user needs to login, 
// then makes a login request, the whole chain should error out if it takes longer than 1 seconds. 
// Use catch to handle errors and timeouts.

function authenticate() {
  console.log("Authenticating");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 200 }));
}

function publish() {
  console.log("Publishing");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 403 }));
}

function timeout(sleep) {
  return new Promise((resolve, reject) => setTimeout(reject, sleep, "timeout"));
}

Promise.race( [publish(), timeout(3000)])
  .then(...)
  .then(...)
  .catch(...);