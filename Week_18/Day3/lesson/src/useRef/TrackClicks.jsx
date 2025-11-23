import { useRef } from "react";

export default function TrackClicks() {
    const clicksRef = useRef(0);
    
    function trackClicks(){
        clicksRef.current++;
        console.log("Click number: ", clicksRef.current);
        
    }
    return <button onClick={trackClicks}>Track Clicks</button>
}