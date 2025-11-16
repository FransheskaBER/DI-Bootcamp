// There are 2 types of input

// 1- uncontrol > React doesnt control it (doesn't store it and doesnt know it) - to read this value, you use "ref"
// a pointer to the input element. You it in input type "file", in thrid-party libraries, performance-heavy
// example:
// import { useRef } from "react";
// export default function UncontrolledInput(){
//     const inputRef = useRef();

//     function handleSubmit(){
//         console.log(inputRef.current.value);
//     }

//     return (
//         <div>
//             <input ref={inputRef} />
//             <button onClick={handleSubmit}>Log Value</button>
//         </div>
//     );
// }


// 2. control > React controls it
// React keeps the input value inside state
// the UI always shows what's in state and not what the browser thinks.
// A control input is just a mirror of React's state.
// example
// import { useState } from "react";
// export default function ControlledInput(){
//     const [text, setText] = useState("");

//     return (
//         <div>
//             <input type="text" onChange={(e) => setText(e.target.value)}/>
//         </div>
//     );
// }



// EXERCISE 1:
// import { useRef } from "react";
// export default function UncontrolledName(){
//     const inputRef = useRef(null);
//     function handleSubmit(){console.log(inputRef.current.value);}
//     return(
//         <div>
//             <input ref={inputRef} />
//             <button onClick={handleSubmit}>Show Name</button>
//         </div>
//     );
// }

// // EXERCISE 2:
// import { useState } from "react";
// export default function ControlledEmail(){
//     const [email, setEmail] = useState("");
//     return(
//         <div>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//             <p>Current: {email}</p>
//         </div>
//     );
// }

// EXERCISE 3:
import { useState } from "react";
export default function ControlledPassword(){
    const [pass, setPass] = useState("");


    function handleChange(e){
        let next = e.target.value;
        next = next.replace(/\s+/g, ""); // remove all spaces
        setPass(next); 
    }

    let feedback = "";
    if (pass.length > 0 && pass.length < 6) feedback = "Password is too short";
    else if (pass.length >= 6) feedback = "Password is too long";

    return(
        <div>
            <input type="text" value={pass} onChange={handleChange}/>
            <p>{feedback}</p>
        </div>
    );
}