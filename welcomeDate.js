console.log("Welcome to Node.js!");

var current = new Date();

var date = current.toISOString().slice(0, 19).replace("T" , " ");

console.log(`Current date and time: ${date}`);
