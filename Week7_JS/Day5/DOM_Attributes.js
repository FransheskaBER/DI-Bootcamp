// HTML Attributes

// Accessing and changing a value of an attribute
//---------------------------------------------------------

elem.hasAttribute(name)	// checks for existence.
elem.getAttribute(name)	// gets the value of an attribute. If the attribute does not exist, an empty string is returned
elem.setAttribute(name, value)	// modifies dynamically the value of an element’s attribute. The method takes two parameters- the name of the attribute to set, and its new value
elem.removeAttribute(name)	// remove the entire HTML attribute from an element


// Examples:

//<body>
//  <div id="elem" about="Elephant" style=""></div>

//This <div> starts with:
// id="elem"
// about="Elephant"
// style="" (empty style)

//  <script>
    let newDiv = document.getElementById("elem") // find the element <div> with id "elem" and store its attributes in newDiv

    //getAttribute('name attribute')
    newDiv.getAttribute('about'); // Look at the "about" attribute and returns (its value)  'Elephant'

    //setAttribute(name attribute, value attribute)
    newDiv.setAttribute('style', "color:blue;");  //looks at the attribute "style" and assign "color:blue"
//Note: if you have just other CSS declarations inside the style attribute, using setAttribute will overworte all the style attributes, so it is
// safer to use the element.atribute.cssDesclation = "newValue" so like: 
newDiv.style.color = "blue"

    //you get --> <div id="elem" about="Elephant" style="color:blue" ></div>

    //loop through the attributes of an element
    for (let attr of elem.attributes) { 
        // the "elem.attributes" will list of the attributes of the element <div> so in this case id, about and style. and go through them, one by one
        // so the first loop will be id > elem, about > elephant, then style > ... and show each pair in an alert like this:
      alert(attr.name + '=' + attr.value);
    }
    // you will see 3 alerts one after another like:
//     id=elem
//     about=Elephant
//     style=color:blue

//  </script>
//</body>


// CLASS EXERCISE:

// Write variables to get the value of the attributes of the specified link :

// href
let item1 = document.getElementById("dI")
item1.getAttribute("href")

// hreflang
console.log(item1.getAttribute("hreflang"))

// rel
console.log(item1.getAttribute("rel"))

// target
console.log(item1.getAttribute("target"))

// type
console.log(item1.getAttribute("type"))





// Modify the style of the paragraph text (such as fontSize, fontFamily, color, etc. )through javascript code.
let para = document.getElementById("text");

para.setAttribute(
    "style",
    "font-size: 30px; font-family: Arial; color: red;"
);

// Another way is with CSS class. First you define the attributes in a class:

// .styled-text {
//   font-size: 30px;
//   font-family: Arial;
//   color: red;
// }

// then you add it to the html:
let para1 = document.getElementById("text");
para1.classList.add("styled-text");

// CLASSLIST
//----------------------------

// classList property is used to access an element’s list of classes

elem.classList.add(nameOfClass)	// Add a new class to the element
elem.classList.remove(nameOfClass)	// Remove the class from the element
elem.classList.add(nameOfClass, otherClass, etc.)	// Add a several new classes to the element
elem.classList.remove(nameOfClass, otherClass, etc.) // Remove several classes from the element
elem.classList.replace(oldClass, newClass)	// Replace the former class by the new one
elem.classList.contains(nameOfClass)	// Boolean : // check if the attribute contains the class

elem.classList.toggle(nameOfClass, true/false)	// Toggles between adding and removing the class
// The first parameter removes the specified class from an element, and returns false. If the class does not exist, it is added to the element, and the return value is true.
// The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed
