// ON CHANGE EVENT
// ================================
// The change event happens when the value of an input element changes and the user finishes the action.
// 👉 In plain words: It fires after the user is done editing (not while typing, but when they leave the field or press enter).

// SYNTAX:

// Inline in HTML
// <input type="text" onchange="myFunction()">

// With JavaScript
element.addEventListener("change", myFunction);

// EXAMPLES:

//Example A: Text Input
// <input type="text" id="username" placeholder="Enter name">
// <script>
    let input = document.getElementById("username");

    input.addEventListener("change", () => {
    console.log("New value is:", input.value);
    });
//</script>

//👉 If you type “Alice” and then click outside the box, it logs:
// New value is: Alice


// ON INPUT EVENT
// ================================
// The input event fires every time the value of an input changes — right away, as the user types, deletes, pastes, etc.

// 👉 In plain words:

// oninput = “tell me immediately when the content changes.”
// onchange = “tell me after the user is done editing (and leaves the field).”

// SYNTAX:

// Inline HTML
// <input type="text" oninput="myFunction()">

// JavaScript
element.addEventListener("input", myFunction);

// EXAMPLES:
// A: Live Preview (typing triggers instantly)
// <input type="text" id="username" placeholder="Type your name">
// <p id="preview"></p>

// <script>
    let input = document.getElementById("username");
    let preview = document.getElementById("preview");

    input.addEventListener("input", () => {
    preview.textContent = "Hello, " + input.value;
    });
// </script>

// 👉 As you type Alice, the paragraph updates live:
// Hello, A → Hello, Al → Hello, Ali → Hello, Alic → Hello, Alice




// ON SUBMIT EVENT
// ================================
// The submit event fires when a form is submitted.

// 👉 In plain words:

// It’s triggered when the user presses the submit button or presses Enter inside a form field.
// You can use it to check/validate data or stop the form from actually sending.

// SYNTAX:

// Inline HTML
//  <form onsubmit="myFunction()">
//   ...
//  </form>

// JavaScript
let form = document.querySelector("form");
form.addEventListener("submit", myFunction);

// EXAMPLES:

// A: Simple Submit
// <form id="signup">
//   <input type="text" name="username" placeholder="Name">
//   <button type="submit">Submit</button>
// </form>

// <script>
let form = document.getElementById("signup");

form.addEventListener("submit", () => {
  console.log("Form submitted!");
});
// </script>
// 👉 When you press the button, it logs "Form submitted!".

// B: Prevent Form from Reloading
// By default, submitting a form reloads the page. To stop that, use event.preventDefault().

// <form id="signup">
//   <input type="text" id="username" placeholder="Name">
//   <button type="submit">Submit</button>
// </form>

// <script>
let form = document.getElementById("signup");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop the reload
  let username = document.getElementById("username").value;
  console.log("User:", username);
});
//</script>
// 👉 This way you can capture the data and handle it with JS (like sending it to a server with fetch).



// EVENT PREVENT DEFAULT
// ================================
// event.preventDefault() is a command in JavaScript that stops the browser from doing the thing it normally does when an event happens.

// Key ideas:

// Many browser events have a default action (something the browser does automatically). Examples:

// Clicking a link (<a href="..." >) → browser goes to a new page.
// Submitting a form → page reloads and sends data.
// Right-clicking → opens context menu.

// If you don’t want that automatic behavior, you use event.preventDefault().
// You usually call it inside an event listener (like onclick, onsubmit, etc.).

// EXAMPLE:

// <form id="myForm">
//   <input type="text" placeholder="Type something">
//   <button type="submit">Submit</button>
// </form>

// <script>
    let form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // 🚫 Stop the page reload
        alert("Form submitted, but page did not reload!");
     });
// </script>


