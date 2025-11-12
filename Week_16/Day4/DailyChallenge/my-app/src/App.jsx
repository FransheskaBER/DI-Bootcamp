import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "Javascript", votes: 0},
    {name: "Java", votes: 0}
  ])

  function handleChange(name){
    setLanguages(prev => prev.map(item => {
      // prev here is the current state value that react passes into the functional form of setState
      // in other words PREV is the latest languages array
      if(item.name === name){
        return {name: item.name, votes: item.votes + 1}
      } else {
        return item;
      }
    }));
  }

  return (
    <>
    <div className="container">
      <h1>Vote Your Language!</h1>
      {languages.map(item => (
          <div className="box" key={item.name}>
            <span className="count">{item.votes}</span>
            <span className="language">{item.name}</span>
            <button className="button" onClick={() => handleChange(item.name)}>Click Here</button>
          </div>
      ))}
    </div>
    </>
  );
}

export default App
