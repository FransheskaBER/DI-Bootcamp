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