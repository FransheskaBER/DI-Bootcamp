import './App.css';
import { ThemeContext, Page } from './useContext/useContext.jsx';
import { UsernameContext } from './useContext/ComponentA.jsx';
import DisplayUsername from './useContext/ComponentB.jsx';
import Counter from './useReducer/useReducer.jsx';
import ShoppingCart from './useReducer/ShoppingCart.jsx';
import { InputFocus, Counter2 } from './useRef/useRef.jsx';
import TrackClicks from './useRef/TrackClicks.jsx';
import OnlineLesson from './OnlineLesson.jsx';


function App() {
  return (
    <>
    {/* useContext */}
    <ThemeContext.Provider value="dark">
      <Page/>
    </ThemeContext.Provider>

    <UsernameContext.Provider value="Yotamchn">
      <DisplayUsername />
    </UsernameContext.Provider>
    <hr /><br />

    {/* useReducer */}
    <Counter />
    <ShoppingCart />
    <br /><br /><hr /><br /><br />

    {/* useRef */}
    
    <InputFocus />
    <Counter2 />
    <TrackClicks />

    </>
  )
}

export default App
