/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type markdown
 * @content
**Summary**

\- An HTML element "form" is a container for user inputs (text fields, checkboxes, etc.).

\- The action attribute tells the browser where to send the data when the form is submitted.

\- The method attribute tells the browser how to send the data (usually GET or POST).
 */

/**
 * @type markdown
 * @content
**KEY ATTRIBUTES:**

\- Form: Defines the start and end of the form. Eveyrthing inside the form (like buttons, inputs) is what the user can fill out.

\- Action: it is a URL or file where the data the user has entered on the form will go when the form is submitted.

\- Method: tells how to send the form data. Is the data appended to the URL as a query string (visible)? if so, then GET. Is the data sent in the body (hidden from URL)? if so, then POST.
 */

/**
 * @type code
 */
// EXAMPLE

<form action="/register" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="username">

  <label for="email">Email:</label>
  <input type="email" id="email" name="useremail">

  <button type="submit">Register</button>
</form>

