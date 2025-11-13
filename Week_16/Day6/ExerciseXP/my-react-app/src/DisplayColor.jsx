import React from "react";
import { useEffect } from "react";

function DisplayColor({ color }){
    console.log("ColorDisplay rendered with:", color, performance.now());
    
    return <h1>My favorite color is {color}</h1>;
}

// export default React.memo(DisplayColor, () => false );
// export default React.memo(DisplayColor, (prevProps, nextProps) => {
//     console.log("[are Equal", { prevProps: prev.color, nextProps: next.color });
//     return false; 
// });


function Child({ show }){

    useEffect(() => {
        console.log("Header mounted");

        return () => alert("Header will be unmounted");
    }, [show])

    if (!show) return null;
    return <header>Hello World!</header>
}

export default React.memo(Child);

// from BuggyCounter.jsx:
// import { useState } from "react";

// export default function ErrorFallback({ error }){
//     return (
//         <div role="alert">
//             <h3>Something went wrong!</h3>
//             <pre>{error.message}</pre>
//         </div>
//     );
// }

// export default function BuggyCounter(){
//     const [count, setCount] = useState(0);

//     function HandleClick(){
//         setCount(prev => prev + 1);
//     }

//     if (count === 5){
//         throw new Error("CRASHED!!");
//     }

//     return (
//         <button onClick={HandleClick} style={{ fontSize: "2rem" }}>{count}</button>
//     );
// }