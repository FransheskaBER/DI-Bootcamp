// WHAT IS FORM VALIDATION:

// It's the process of checking if the info someone typed into a form is correct before the form is actually sent.

// KEY IDEAS:

// Checks required fields (e.g., you must enter an email).
// Checks format (e.g., email looks like name@example.com).
// Checks rules (e.g., password must be at least 8 characters).
// Happens before submission so the server doesn’t get bad data.
// Can be done in HTML (basic built-in checks) or JavaScript (custom rules).

// EXAMPLE:

//  <form id="signup">
//      <input type="text" name="username" required placeholder="Enter username">
//      <input type="email" name="email" required placeholder="Enter email">
//      <input type="password" name="password" minlength="8" required placeholder="Password">
//      <button type="submit">Sign up</button>
//  </form>

// required → can’t leave it empty.
// type="email" → must look like an email.
// minlength="8" → password must be at least 8 characters.


// TYPE OF VALIDATION CLIENT VS SERVER SIDE

// Form validation can happen on the client side (in the browser, before sending) or on the server side (after sending, on the backend).

// 1) Client-side validation (in the browser, with HTML/JS)

// ✅ Happens instantly, no server needed.
// ✅ Gives fast feedback to the user.
// ❌ Can be bypassed (hackers can disable JavaScript).

// Examples:

// HTML built-in attributes:
// required → field must be filled.
// type="email" → must look like user@example.com.
// minlength, maxlength, pattern.

// JavaScript checks:
// Custom rules (e.g., “passwords must match”).
// Showing error messages near fields.


// 2) Server-side validation (in backend, after submission)

// ✅ Secure, can’t be bypassed (server always controls final check).
// ✅ Can check against databases or business rules.
// ❌ Slower (requires sending data to the server).

// Examples:

// Check if username is already taken in the database.
// Verify password length/complexity on backend.
// Confirm credit card number is valid with payment gateway.

