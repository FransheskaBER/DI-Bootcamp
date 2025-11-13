import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorBoundary.jsx";

export default function RightColumn(){
    const crasher = { function: "I live to crash" };
    const [text, setText] = useState(JSON.stringify(crasher));

    function eventHandler(){
        throw new Error("Event handler error");
    };

    return(
        <div className="col right">
            <h2>Right Column</h2>

            <p>There are two types of errors we can trigger inside this component: A rendering error and a regular javascript error.</p>

            <hr />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div>
                <p>Clicking this button will replace the <code>stringified</code> object,{' '}<code>{text}</code>, with the original object. This will result in a rendering error.</p>
                <button type="button" className="btn btn-danger" onClick={() => setText(crasher)}>Replace String with Object</button>
            </div>
            </ErrorBoundary>

            <hr />
            <p>Clicking this button will invoke an event handler, inside of which an error is thrown.</p>
            <button type="button" className="btn btn-danger" onClick={eventHandler}>Invoke Event Handler</button>
        </div>
    );
}