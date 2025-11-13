import { useState } from 'react';
import './App.css';
import LeftColumn from './LeftColumn.jsx';
import RightColumn from './RightColumn.jsx';

function App() {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand" >Error boundaries in react</span>
      </div>
    </nav>
    <div className="container text-center">
      <div className="row align-items-center">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
    </>
  )
}

export default App
