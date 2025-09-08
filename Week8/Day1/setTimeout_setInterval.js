// JS TIMING FUNCTIONS

// SETTIMEOUT()
// It runs a function once, after a delay in milliseconds.
// It;s like setting a kitchen timer > when the time is up, it rings once.

// Example:
setTimeout(() => {
    console.log("This shows after 2 seconds")    
}, 2000); // 2 seconds


// CLEARTIMEOUT()
// Cancel a setTimeout() before it runs.
// It's like you will set a 3-min egg timer, then decide you dont want eggs > so you stop the timer before it rings

// Example:
let timer = setTimeout(() => {
    console.log("you will NOT see this");
}, 3000);
clearTimeout(timer); // cancel the timeout


// SETINTERVAL()
// Runs again and again on a schdule
// Runs a function repeatedly, every X millisecons
// it is like a metronome, ticking again and again

// Example:
let counter = 0;
let interval = setInterval(() => {
    counter++;
    console.log("Tick " + counter);
}, 1000); // runs every 1 second
// output:
// Tick 1 (after 1 second) // every 1 second
// Tick 2 (after 2 seconds)
// Tick 3 (after 3 seconds)

// CLEARINTERVAL()
// Stops a repeating interval.
// turns off the metronome after a few ticks

// If you don’t stop the inteerval, it goes on forever. You stop it with clearInterval(timer).

if (counter > 5) {
  clearInterval(interval); // stops after 5 runs
}



