// 1. alert
// This shows a message and pauses script execution until the user presses “OK”.

// alert(message);

alert("Hello");


// 2. prompt
// It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
// The visitor may type something in the prompt input field and press OK. Or they can cancel the input by pressing Cancel or hitting the Esc key.
// The call to prompt returns the text from the input field or null if the input was cancel

// prompt(title, [default]) * title : the text to show the visitor. * default: optional second parameter, the initial value for the input field.

let age = prompt('How old are you?', 20);
alert(`You are ${age} years old!`); // You are 20 years old!



// 3. confirm
// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
// The result is true if OK is pressed and false otherwise.

// confirm(question)

let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed