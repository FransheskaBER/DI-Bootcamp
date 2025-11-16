import './App.css';
import {Routes, Route} from "react-router-dom";
import DebugLocation from './UseLocation.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DebugLocation />}></Route>
        <Route path="/test" element={<h1>Welcome to Test page</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
