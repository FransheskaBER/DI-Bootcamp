    // Exercises XP

    // What we will learn
    // HTTP & Forms


    // 🌟 Exercise 1 : HTML Form
    // Instructions
    // Hint : Read about sending form data using the HTTP protocol

    // form
    // Create a form like the one above. The form should contain three inputs:
    // a small text input asking for a name,
    // a larger textarea input to write a message,
    // a submit input (“Send”)
    // When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
    // Where will the sent data appear? to my local URL

    // Get the query string from the current URL
    // const queryString = window.location.search;
    // console.log(queryString);

    // // Turn it into a URLSearchParams object
    // const params = new URLSearchParams(queryString);

    // // prevent default reload
    // document.getElementById("myForm").addEventListener("submit", (e) => {
    //     e.preventDefault();
    // })

    // // convert query string from URL to object
    // obj = {};
    // for (const [key, value] of params.entries()){
    //     obj[key] = value
    // }
    // console.log(obj);

    // const stringfyObj = JSON.stringify(obj);
    // console.log(stringfyObj);

    // const stringtoObjParse = JSON.parse(stringfyObj);
    // console.log(stringtoObjParse)

    // 🌟 Exercise 2 : HTML Form #2
    // Instructions
    // Use the same form structure as Exercise 1.
    // When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
    // Where will the sent data appear? Hint : Look at the Network Tab

    // Response:
    // <form id="myForm" method="POST" action="https://httpbin.org/post">
        // So using the same HTML file for the action url didn't work for me.
        // Not with a plain static HTML file (like when you’re serving it with VS Code Live Server).
        // Yes, but only if you also have server-side code (Python/Flask, Node/Express, PHP, etc.) that handles the POST request for that file.
    // The databa appear in the dev tools > network tab > requests , headers > payload for the form


    // 🌟 Exercise 3 : JSON Mario
    // Instructions
    // Using this code:
    const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
            description:"Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser : {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach : {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
    }

    console.log(marioGame);

    // Convert this JS object into a JSON object. What happens to the nested objects ?
    const JSONobj = JSON.stringify(marioGame);
    console.log(JSONobj);
    // The nested objects nothing they are also nested objects of characters parent object.

    // Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
    const prettyJSONobj = JSON.stringify(marioGame, null, 4);
    console.log(prettyJSONobj);

    // Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
    // JSONobj: "{\"detail\":\"An amazing game!\",\"characters\":{\"mario\":{\"description\":\"Small and jumpy. Likes princesses.\",\"height\":10,\"weight\":3,\"speed\":12},\"bowser\":{\"description\":\"Big and green, Hates princesses.\",\"height\":16,\"weight\":6,\"speed\":4},\"princessPeach\":{\"description\":\"Beautiful princess.\",\"height\":12,\"weight\":2,\"speed\":2}}}"
