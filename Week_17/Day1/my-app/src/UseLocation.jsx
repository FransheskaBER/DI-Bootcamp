import { Link, useLocation } from "react-router-dom";

export default function DebugLocation(){
    const location = useLocation();
    console.log(location);
    return (
        <>
        <pre>{JSON.stringify(location, null, 2)}</pre>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/test">Go to Test</Link>
        </nav>
        </>
    ); 
}