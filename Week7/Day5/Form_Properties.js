// DOCUMENT.FORM
// It is a specical collection in JS tat automatically contains all the forms that is included in an html page. 
// it's like an array/dictionary of forms so you can use indexes, or by name of its attributes.

document.forms // gets all the forms in the page

document.forms.attributeValue // if you form has name="myForm", you can access it directly by that name
document.forms.myform;

document.forms[index] // access the position in the page so [0] wll access the first form
document.forms[0].name
document.forms[1].id

document.forms[index].elements // this will access the elements collections of that forms, meaning its inputs, buttons, selects, etc...

document.forms[index].elements.attributeValue // so let's say a form has an element call username, so you can get its default value you set for it
document.forms[0].elements.username.value; // outpout: "Alice"

document.forms[index].elements[index] //you can use index for the element to get its value
document.forms[0].elements[0].value; // output: "Alice"


// INPUT.VALUE
// the current value inside an <input>, <textarea> or <select>
// you can use it to see what users has entered or to set a default- mainly for QAing if your site process data good
//let's say you have:
//* <input type="text" id="username" value="Alice"> *//
let username = document.getElementById("username");

//get the value:
console.log(username.value); // "Alice"

// set the value:
username.value = "Bob"; // Now the input shows BOB



//INPUT.CHECKED
// works with checkboxes and radio buttons and returns a BOOLEAN

//let's say you have this input:
// <input type="checkbox" id="subscribe" checked>

let subscribe = document.getElementById("subcribe");

// check the state if subscribe or not
console.log(subscribe.checked); // true if so

// if you want to uncheck it:
subscribe.checked = false;
// or 
subscribe.checked = true;




// <FIELDSET>
// this is an html that put mini forms together inside a big form, usually it has a label on top called <legend>
// they are call sub-forms because behaves like a form itself.

// lets get all the forms first:
let form = document.forms[0];

// this is to see All elements in the form
console.log(form.elements);

// them lets get the First fieldset in the form and store it in a variable
let personalInfo = form.elements[0];  // the <fieldset>

// I want to see all Elements inside the fieldset by using its variable
console.log(personalInfo.elements);

// I want to Access a specific input in this case the value of the first name input
console.log(personalInfo.elements.firstName.value);





// FORMDATA
// It is JS object that mhelps you collect all the data from a form as pairs of key > value which you can then sent to a server with "fetch"
// so you can use it to collect data to see in a pair key>value or to send  a whole form at one or specific files to a server

// Without FormData: you’d have to do:

let username = form.elements.username.value;
let email = form.elements.email.value;
// ... and so on for every input

// With FormData: you just do:
let data = new FormData(form);

// Boom 💥 all inputs are included.


// syntax: formData.get("username")




// SELECT
// so this elements is for dropdown list examples:

// <select id="colors">
//  <option value="red">Red</option>
//  <option value="green" selected>Green</option>
//  <option value="blue">Blue</option>
//</select>


// you can use SELECT.OPTIONS to get all the <options> elements inside the <select>
let select = document.getElementById("colors")
console.log(select.options);
// you can use indexes as well:
console.log(select.options[0].value)



// CLASS EXERCISES:

// Create a structured HTML file, and add the code below in the body. In a JS file, write a JavaScript function to :

// Get the value of the 2nd Option
let select2 = document.getElementById("school-type");
console.log(select2.options[1].value)

// Add a new option with the value 'Work' at the end of the select form
let new_option = new Option("Work", "work")
select2.add(new_option, -1)

// Add a new option with the value 'Primary School' at the beginning of the select form
let new_option2 = new Option("Primary School", "primary School")
console.log(select2.add(new_option2, 0))



// Change 'College' as selected. Use the 3 properties we learned above
// method 1: option.selected
select2.options[3].selected = true;

//method 2: select.selectedIndex
select2.selectedIndex = 3;

// Method 3: select.value
select2.value = "collage";




// Add a button that alert the choice selected
let btn = document.createElement("button");
btn.textContent = "click me";
// add an action:
btn.onclick = () => alert("selected: " + select2.value) //So when the button is clicked, show the alert with the current selection.
//append to id
document.body.appendChild(btn);
