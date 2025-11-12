import './App.css';
import { ErrorBoundary } from "react-error-boundary";
import BuggyCounter from './BuggyCounter.jsx';
import ErrorFallback from './ErrorBoundary.jsx';
import { useState, useEffect, useRef } from 'react';
import DisplayColor from './DisplayColor.jsx';
import { useLayoutEffect } from 'react';
import Child from './DisplayColor.jsx';


function App() {
  const [show, setShow] = useState(true);
  const [color, setColor] = useState("RED");
  const prevColor = useRef();

  function HandleSetShow(){
    setShow(false);
  }

  useLayoutEffect(() => {
    if (prevColor.current){
      console.log("in getSnapShotBeforeUpdate (pre commit on DOM)", performance.now());
    }
  });

  useEffect(() => {
    if (prevColor.current){
      console.log("after updated (post commit on DOM)", performance.now());
    }
    prevColor.current = color;
  }, [color]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor("YELLOW");
    }, 3000)

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
    <h1>Click on the numbers to increase the counters.</h1>
    <h2>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</h2>
    <br />

    <h3>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</h3>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BuggyCounter />
      <BuggyCounter />
    </ErrorBoundary>
    <br /><br /><br />
    
    <hr />
    <h3>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</h3>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BuggyCounter />
    </ErrorBoundary>

    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BuggyCounter />
    </ErrorBoundary>
    <br /><br /><br />
    
    <hr />
    <h3>This counter is not inside of boundary. So if crashes, all other components are deleted.</h3>
    <BuggyCounter />


    <div>
      <DisplayColor color={color} />
      <button onClick={() => setColor("BLUE")}>Change Color</button>
    </div>

    <div>
      <Child show={show}/>
      <button onClick={HandleSetShow}>Delete Header</button>
    </div>


    </>
  );
}

export default App
