setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate"));
// outcome:
// Timeout
// Immediate

const fs = require("fs");
fs.readFile(__filename, () => {
    setTimeout(() => console.log("Timeout inside reasdFile"), 0);
    setImmediate(() => console.log("Immediate inside readFile"));
});
// output:
// Immediate inside readFile
// Timeout inside reasdFile

setInterval(() => {
    console.log("Time tick")
}, 1000);
setImmediate(() => {
    console.log("Immediate called");
})
process.nextTick(() => {
    console.log("Next tick called");
})
console.log("Start");
// output:
// Start
// next tick called  // process.nextTick runs BEFORE the event loop continues
// Inmediate tick called  // setImmediate runs in the Check phase (soon after)
// time tick // setInterval(1000) fires each second
// time tick
// time tick
// ...

Promise.resolve().then(() => {
    console.log("promise microtask");
});
process.nextTick(() => {
    console.log("nextTick microtask");
});
console.log("end of script");
// end of script
// nextTick microtask
// promise microtask

setTimeout(() => console.log("Timer phase"), 0);
const fi = require("fs");
fi.readFile("file.txt", () => {
  console.log("Poll phase");
});
setImmediate(() => console.log("Check phase"));
socket.on("close", () => console.log("Close phase"));
// Timer phrase or Check phase
// Poll phase

setImmediate(() => console.log("Immediate"));
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
process.nextTick(() => console.log("nextTick"));
console.log("Start");
// Start
// nextTick
// Promise
// Timeout or Imediate (order may vary)

// process.nextTick and Promise.then/await are MICROTASKS and these are fun right after current JS finished and before it moves on to any event-loop
// phases like timers or check for setImmediate.

console.log("A");
Promise.resolve().then(() => console.log("B promise"));
process.nextTick(() => console.log("C nextTick"));
setTimeout(() => console.log("D timeout"), 0);
setImmediate(() => console.log("E immediate"));
console.log("F");
// A
// F
// C nextTick
// B promise
// D timeout or E immediate