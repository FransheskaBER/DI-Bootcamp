// // BASICS
// // --------------------------------
// // when the browser which it is a program that will interpret your html and csss and render your site on the page you are, by rendering
// // it creates a representation of the document (your files where you created your site) called DOM, a document object model.
// // this document allows javascript to access the text content and elements of the web document as objects

// // So DOM makes your sites dynamic and interactive. it allows the programing language JS to manipulate the text, structure and style by 
// // representing the page content all page content as objects that can be modified.

// // NODES:
// // Root node is the document itself
// // Element (children) nodes are the tags like <head>, <body>, <h1>, etc...
// // Text nodes are the content itself inside a tag for example the content inside h1 or page
// // Attribute nodes are the properties like id or class inside a tag




// // ACCES NODES:
// // ------------------------------------
// element.children[index]
// element.firstElementChild
// element.lastElementChild
// element.parentNode
// element.nextElementSibling
// element.previousElementSibling
// element.textContent

// // ACCESS NODES WITH METHODS:
// // -------------------------------------
// element.getElementById()
// element.getElementsByClassName()

// element.querySelector() // this is a CSS-selector - returns the first elements that matches the specified selector (tag in html)
// element.querySelectorAll() // same as above but brings all wiht those selectors


// element.getElementsByTagName()
// //Example:
// //  <p>This is the welcome message.</p>
// //  <p id="second">This is the technology section.</p>
// //  <script>
//     let paragraphs = document.getElementsByTagName("p");
//     alert("Content in the second paragraph is " + paragraphs[1].innerHTML);
//     document.getElementById("second").innerHTML = "The orginal message is changed.";
// //  </script>


// element.innerHTML() // access the content of an element. Example:
// // <h1 id="one">Welcome</h1>
// //    <script>
//        let text = document.getElementById("one").innerHTML;
//        alert("The first heading is " + text); // "The first heading is Welcome"
// //    </script>



// // FIND HTML ELEMENTS
// // --------------------------------

// // Method	Description:

// // document.getElementById(id)	// Find an element by element id
// // document.getElementsByTagName(name)	// Find elements by tag name
// // document.getElementsByClassName(name)	// Find elements by class name
// // document.querySelector(name)	// Find first match of any CSS selector (id, tag, class, etc.)
// // document.querySelectorAll(name)	// all matches of any CSS selector (id, tag, class,etc.)

// // 1) What is a CSS selector?

// // A CSS selector is just a pattern we use to point to elements in HTML.
// // You already use them in CSS stylesheets:

// // /* CSS examples */
// // #title { color: red; }      /* selects element with id="title" */
// // .item { font-weight: bold; }/* selects elements with class="item" */
// // li { color: blue; }         /* selects all <li> tags */


// // So when you write document.querySelector(...), you pass the same string you’d use in CSS.



// // Adding and Deleting Elements:

// // To add an element, you need two steps. You first need to create the new element and give it whatever attributes, text, styling, etc.,
// // then append it to the parent element you want it to be inside.

// // Method:
// // document.createElement(element)	// Create an HTML element
// // document.removeChild(element)	// Remove an HTML element
// // document.appendChild(element)	// Add an HTML element
// // document.replaceChild(new, old)	// Replace an HTML element

// // EXAMPLES:

// // CREATE AND ADD
// // ---------------------------
// createElement()
// let variableName = document.createElement("element")
// document.element.appendChild(variableName);

// //OR
// let variableN = document.createTextNode("Text")
// name_.appendChild(variableN)


// //Examples:
// let newItem = document.createElement("h2");
// newItem.textContent = "This is the new element H2";
// //document.getElementsByTagName("body")[0].appendChild(newItem) // It will be added at the end of body so after tag <p>

// // to add the new item right after H1, use:
// let h1 = document.getElementById("title"); // the <h1>
// // h1.parentNode.insertBefore(newItem, h1.nextSibling); 


// // REMOVE
// // -----------------------
// let VN = document.getElementById("ul");
// let VN_1 = document.querySelector("li" = "first from the list");
// VN_1.remove()

// // OR

// let VariableNa = document.getElementById("parent_element");
// let VariableNa2 = document.getElementById("child_element");
// VariableNa.removeChild(VariableNa2)

// // Example:
// // let list = document.getElementById("list"); // Get element by id
// // let firstItem = document.querySelector("li"); // get first item from list li
// // firstItem.remove();

// // let list = document.getElementById("list");      // the <ul>
// // let firstItem = list.querySelector("li");        // first <li> (Milk)
// // list.removeChild(firstItem);                     // remove Milk


// // REPLACE  OR CHANGE
// // -------------------------
// document.getElementById("header").textContent = "Hello World!";
// document.getElementsByTagName("div")[0].innerHTML = "<h1>Hello World!</h1>" // the [0] means give me the first

// // Examples:
// // let list2 = document.getElementById("list");
// // let newItem = document.createElement("li");
// // newItem.textContent = "Banana";

// // let oldItem = list.querySelector("li");  // first <li>
// // list.replaceChild(newItem, oldItem);     // replace Milk with Banana






// // MATCHES()
// // it return True when an element match a given css selector or False if not.
//   // can be any collection instead of document.body.children
// for (let elem of document.body.children) {
//     if (elem.matches('a[href$="zip"]')) {
//     // check if it ends with "zip"
//     alert("The archive reference: " + elem.href );
// }}


// // CLOSEST()
// // Looks at the nearest ancestor that matches the css selector.  in other words, it goes up from the element and checks each of the parents,
// // if it matches the selector, the the search stops and the acestor is returned
// let chapter = document.querySelector('.chapter'); // LI

// alert(chapter.closest('.book')); // UL
// alert(chapter.closest('.contents')); // DIV

// alert(chapter.closest('h1')); // null (because h1 is not an ancestor)



// CLASS EXERCISES:
//-------------------------------------
// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);

// 2. The ul DOM node?
console.log(document.body.lastElementChild);
console.log(document.body.children[1]);


// 3. The second li (with Pete)?
console.log(document.body.lastElementChild.lastElementChild);
console.log(document.body.firstElementChild.nextElementSibling);




















// // For each of the questions, find 2 WAYS to access :
// // 1. The div node
// document.getElementById("container");
// document.getElementsByTagName("div")[0];


// // 2. The ul nodes, and render all of it's children one by one

let lists1 = document.querySelectorAll("ul");
for (let ul of lists1){
    let items = ul.querySelectorAll("li");
    for (let li of items){
        console.log(li.textContent);
    }
}

let list2 = document.getElementsByClassName("list");
for (let list of list2 ){
    let items = document.getElementsByTagName("li");
    for (let li of items){
        console.log(li.textContent);
    }
}

// // 3. The first li of each ul
// let lists = document.getElementsByTagName("ul");
// for (let ul of lists){
//     console.log(ul.document.getElementsByTagName("li")[0])
// }

// let lists2 = document.querySelectorAll("ul")
// for (let ul of lists2){
//     console.log(ul.document.querySelector("li"))
// }




