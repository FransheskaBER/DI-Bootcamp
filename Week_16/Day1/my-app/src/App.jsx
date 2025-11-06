import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Greeting from './Greetings.jsx';
import Counter from './counter.jsx';
import ToogleButton from './ToggleButton.jsx';
import EffectDemo from './EffectDemo.jsx';
import RefDemo from './RefDemo.jsx';
import ContextDemo, { ThemeProvider } from './ContextDemo.jsx';
import ListDemo from './ListDemo.jsx';


// REACT Hooks:
// useState() Remember data inside a component like memory in a brain
// useEffect() Run code when sth happens like event triggers
// useRef() Remember a value without re-render like a sticky note
// useContext() Share data across components like a global inbox

function App() {
  // React gives you a special function to create a state which is { useState } and you can use like this: const [count, setCount] = useState(0);
  // The "count" means current value starts at 0, "setCount" is the function used to update value, and "useState(0)" creates state and set initial value to 0.

  return (
    <div>
      <h1>My React App</h1>
      <Greeting name="Fran" />
      <Greeting name="Yotam" />
      <Counter />
      <ToogleButton />
      <ThemeProvider>
        <h1>Hooks Playground</h1>
        <EffectDemo />
        <RefDemo />
        <ContextDemo />
      </ThemeProvider>
      <ListDemo />
    </div>
  );
}

export default App
