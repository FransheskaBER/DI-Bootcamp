import { useState } from 'react';
import './App.css';
// import Clock from './UseState.jsx';
// import Counter from './Counter.jsx';
// import DynamicGreeting from './DynamicGreeting.jsx';
// import RenderTracker from './RenderTracker.jsx';
// import AutoMessage from './AutoMessage.jsx';
// import Sunrise from './useEffect.jsx';
// import PostsByUser from './PostsByUser.jsx';
// import HelloEffect from './HelloEffect.jsx';
// import TimerEffect from './TimerEffect.jsx';
// import Extra from './Extra.jsx';
import DynamicTimer from './DynamicTimer.jsx';

export default function App() {
  const  [show, setShow] = useState(true);
  return (
    <>
    {/* <Clock />
    <Counter />
    <DynamicGreeting />
    <RenderTracker />
    <AutoMessage />
    <Sunrise /> */}
    {/* <HelloEffect /> */}
    <div>
      <button onClick={() => setShow(s => !s)}>{show ? "Hide" : "Show"}</button>
      {show && <DynamicTimer />}
    </div>
    </>
  )
}

