// --------------------------------
// FIND HTML ELEMENTS
// --------------------------------

// Method	Description:

// document.getElementById(id)	// Find an element by element id
// document.getElementsByTagName(name)	// Find elements by tag name
// document.getElementsByClassName(name)	// Find elements by class name
// document.querySelector(name)	// Find first match of any CSS selector (id, tag, class, etc.)
// document.querySelectorAll(name)	// all matches of any CSS selector (id, tag, class,etc.)

// 1) What is a CSS selector?

// A CSS selector is just a pattern we use to point to elements in HTML.
// You already use them in CSS stylesheets:

// /* CSS examples */
// #title { color: red; }      /* selects element with id="title" */
// .item { font-weight: bold; }/* selects elements with class="item" */
// li { color: blue; }         /* selects all <li> tags */


// So when you write document.querySelector(...), you pass the same string you’d use in CSS.



// Adding and Deleting Elements:

// To add an element, you need two steps. You first need to create the new element and give it whatever attributes, text, styling, etc.,
// then append it to the parent element you want it to be inside.

// Method:
// document.createElement(element)	// Create an HTML element
// document.removeChild(element)	// Remove an HTML element
// document.appendChild(element)	// Add an HTML element
// document.replaceChild(new, old)	// Replace an HTML element

// EXAMPLES:


// CREATE AND ADD
// ---------------
// let newItem = document.createElement("h2");
// newItem.textContent = "This is the new element H2";
// document.getElementsByTagName("body")[0].appendChild(newItem) // It will be added at the end of body so after tag <p>

// to add the new item right after H1, use:
// let h1 = document.getElementById("title"); // the <h1>
// h1.parentNode.insertBefore(newItem, h1.nextSibling); 


// REMOVE
// ----------------
// let list = document.getElementById("list"); // Get element by id
// let firstItem = document.querySelector("li"); // get first item from list li
// firstItem.remove();

// let list = document.getElementById("list");      // the <ul>
// let firstItem = list.querySelector("li");        // first <li> (Milk)
// list.removeChild(firstItem);                     // remove Milk


// REPLACE
// ------------------
// let list2 = document.getElementById("list");
// let newItem = document.createElement("li");
// newItem.textContent = "Banana";

// let oldItem = list.querySelector("li");  // first <li>
// list.replaceChild(newItem, oldItem);     // replace Milk with Banana



