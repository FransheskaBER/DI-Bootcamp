// What are DOM Events?
//============================================

// DOM = Document Object Model → basically your webpage’s structure (all elements as objects in a tree).
// Event = something that happens on the page (like a user clicking, typing, hovering, submitting a form).
// DOM Event = when something happens to an element in the DOM, and you can tell JavaScript:
// “When X happens on this element, do Y.”

// General Syntax:

// The most common way:
element.addEventListener("eventType", functionToRun);
// element → the DOM element you’re watching
// "eventType" → string for the event (like "click", "mouseover", "keydown")
// functionToRun → what should happen when the event occurs

// Example:
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("Button was clicked!");
});


//More real use cases examples:

// a) Click a Button → Show Alert
//--------------------------------
// <button id="greet">Say Hi</button>
// <script>
   let button = document.getElementById("greet");
   button.addEventListener("click", () => {
     alert("Hello there!");
   });
// </script>


// b) Typing in Input → Show Live Preview
//----------------------------------------
// <input id="name" placeholder="Type your name">
// <p id="preview"></p>
// <script>
   let input = document.getElementById("name");
   let preview = document.getElementById("preview");

   input.addEventListener("input", () => {
     preview.textContent = "Hello, " + input.value;
   });
// </script>


// c) Form Submit → Prevent Empty Submission
//-------------------------------------------
// <form id="signup">
//   <input id="email" type="email" placeholder="Email">
//   <button>Submit</button>
// </form>
// <script>
   let form = document.getElementById("signup");

   form.addEventListener("submit", (event) => {
     let email = document.getElementById("email").value;
     if (!email) {
       event.preventDefault(); // stops form from submitting
       alert("Please enter your email!");
     }
   });
// </script>




// Two Main Ways to Attach Events
// ========================================

// A) Inline event handlers

// in HTML:
<button onclick="alert('Hello!')">Click me</button>
//OR 
// in JSL
let btn1 = document.querySelector("button");
btn1.onclick = () => alert("Hello!");

// B) Using the addEventListener

// <button id="btn">Click me</button>
// <script>
    let btn2 = document.getElementById("btn");
    btn2.addEventListener("click", () => alert("Hello!"));
    btn2.addEventListener("click", () => console.log("Another listener!"));
// </script>




// Two way to remove event listeners:
// ===================================

// A) Use { once: true} (automatic option)

// <button id="signup">Sign Up</button>

// <script>
    let btn3 = document.getElementById("signup");

    btn3.addEventListener("click", () => {
        alert("You signed up!");
    }, { once: true }); // 👈 runs once, then removed
//</script>



// B) Use removeEventListener (manual)
// Here you define the handler in a variable (not an anonymous function), so you can remove it later.

// <button id="track">Track Clicks</button>
// <button id="stop">Stop Tracking</button>

// <script>
    let trackBtn = document.getElementById("track");
    let stopBtn = document.getElementById("stop");

    function logClick() {
        console.log("Tracked a click!");
    }

    trackBtn.addEventListener("click", logClick);

    stopBtn.addEventListener("click", () => {
        trackBtn.removeEventListener("click", logClick); // ❌ no more logging
        console.log("Tracking stopped.");
     });
// </script>



// Keyword "This"
// ======================

// The keyword this is a special variable that always refers to “the object that is currently calling or owning the code.”
// 👉 Think of this as “who am I right now?” for your function.

// Rule of Thumb:

// Inside an object method → this = the object.
// In a regular event handler function → this = the element.
// In arrow functions → this = whatever it was outside (doesn’t change).
// In global scope (browser) → this = window.


// A) this in an object method
let person = {
  name: "Alice",
  greet: function() {
    console.log("Hi, I’m " + this.name);
  }
};

person.greet(); // "Hi, I’m Alice"
// Here, this refers to the person object, because person is calling greet.


// B) this in the browser (event handler)
// <button id="btn">Click me</button>
// <script>
    let btn4 = document.getElementById("btn");

    btn4.addEventListener("click", function() {
        console.log(this); // the button element itself
        this.style.backgroundColor = "yellow"; // changes button color
     });
// </script>
// Inside a regular function handler, this points to the element that fired the event(the btn4)


// C) this in arrow functions (different!)
btn.addEventListener("click", () => {
  console.log(this); // NOT the button!
});
// Here, this doesn’t change to the button (it is usually the window in browsers).
// Instead, it “inherits” this from the outer scope (often window in browsers).
// That’s why arrow functions are great for keeping this steady, but not for element-specific stuff.




// WHEN TO USE "this"
// ===========================

// 1) Why Use this Instead of Hardcoding the Element?

// Imagine you have many elements — not just one.
<ul id="todo">
  <li>Buy milk</li>
  <li>Walk the dog</li>
  <li>Study JS</li>
</ul>

// If you attach one event listener to the parent <ul> (event delegation):
let list = document.getElementById("todo");

list.addEventListener("click", function(e) {
  console.log(this);      // the <ul>
  console.log(e.target);  // the <li> you actually clicked
});

// this = the element that owns the handler (<ul> in this case).
// e.target = the exact thing clicked (<li>).
// Without this, you’d have to manually get the parent every time.
// With this, you can say “the element this handler belongs to.”


// 2) Cleaner, Reusable Code

// Let’s say you want to apply the same behavior to multiple buttons:
// <button class="action">Save</button>
// <button class="action">Delete</button>
// <button class="action">Edit</button>

// JavaScript:
let buttons = document.querySelectorAll(".action");

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    console.log("You clicked:", this.textContent);
  });
});

// 👉 Here, this is each button in turn.
// If you wrote code for each button separately, you’d repeat yourself.
// With this, one function works for all.


// 3) Dynamic Situations

// Sometimes you don’t know in advance which element the user will interact with.
// this lets your handler adapt automatically.
// You don’t have to hardcode IDs, which makes your code flexible.

// Example:
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", function() {
    this.style.color = "red"; // whichever <li> was clicked
  });
});

// Without this, you’d have to write:
e.target.style.color = "red";
// Both work, but this reads more naturally: "This element, the one that was clicked, should turn red."


// EVENT OBJECT vs "this"
// =============================

// e (event object) = details about the event itself (which key was pressed, mouse position, etc.).
// this = “the object that owns the function right now” (context).

// Example:
button.addEventListener("click", function(e) {
  console.log("Event object:", e.type);   // "click"
  console.log("This:", this);             // <button>
});

// 👉 They work together:
// Use "e" when you need info about the event.
// Use "this" when you need the element that owns the handler.


// EVENT PROPAGATION
// ========================
// When you click something inside the page, the event doesn’t just happen there — it travels through the DOM tree:

// First down from the top (<html> → <body> → …) → capturing phase
// Then at the target (the element you clicked)
// Then up again to its parents (<div>, <body>, <html>) → bubbling phase
// So, one click can be “seen” by multiple elements.

// When Do You Need It? You need it when you want to:

// 1. Event delegation → one listener on a parent handles events for many children.
// Example: a <ul> with 100 <li> items. Instead of adding 100 listeners, add one on the <ul> and use propagation to catch clicks on its <li>s.

// 2. Nested elements → when parent and child both care about the same event.
// Example: click a button inside a card. The button might do something, but the card might also need to know you clicked anywhere inside it.

// 3. Control flow → sometimes you want to stop the event from reaching parents (e.g., a modal with a close button inside).


// Example A (with propagation explained)
<ul id="todo">
  <li>Buy milk</li>
  <li>Walk the dog</li>
  <li>Study JS</li>
</ul>

let list1 = document.getElementById("todo");

list1.addEventListener("click", (e) => {
  console.log("Event target:", e.target.tagName);
});

// Now click on <li>Buy milk.
// Propagation in action:
// The click starts from <html>, goes down to <ul>, then <li>.
// Since you clicked <li>, that’s the target.
// Then it bubbles back up → <ul>, so the <ul>’s listener runs.
// That’s why we don’t need 100 listeners (one per <li>).
// The bubbling phase delivers the event to <ul>.



// Example B (modal — why stopPropagation() matters)
<div id="modal" style="background:lightblue; padding:20px;">
  <button id="close">X</button>
</div>

let modal = document.getElementById("modal");
let close = document.getElementById("close");

modal.addEventListener("click", () => {
  console.log("Modal background clicked → close modal");
});

close.addEventListener("click", (e) => {
  console.log("Close button clicked");
  // stopPropagation prevents bubbling to the parent
  e.stopPropagation();
});

// Without stopPropagation()
// Click the close button:
// Close button clicked
// Modal background clicked → close modal

// Why both?
// First the button fires (target phase).
// Then the event bubbles up into the modal → modal handler fires.

// With stopPropagation()
// Click the close button:
// Close button clicked
// Bubbling is stopped, so the modal doesn’t get the event.

// ✅ So:
// Example A used bubbling to catch child events at the parent.
// Example B used stopPropagation() to block the event from reaching the parent.

