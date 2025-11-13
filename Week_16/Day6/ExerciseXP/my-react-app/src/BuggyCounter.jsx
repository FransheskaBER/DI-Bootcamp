import { useState } from "react";

// export default function ErrorFallback({ error }){
//     return (
//         <div role="alert">
//             <h3>Something went wrong!</h3>
//             <pre>{error.message}</pre>
//         </div>
//     );
// }

export default function BuggyCounter(){
    const [count, setCount] = useState(0);

    function HandleClick(){
        setCount(prev => prev + 1);
    }

    if (count === 5){
        throw new Error("CRASHED!!");
    }

    return (
        <button onClick={HandleClick} style={{ fontSize: "2rem" }}>{count}</button>
    );
}