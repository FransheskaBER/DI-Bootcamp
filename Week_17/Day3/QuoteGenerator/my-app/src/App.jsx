import { useState, useEffect } from 'react'
import './App.css'

const randomColor = () => `hsl(${Math.floor(Math.random() * 360)}, 80%, 70%)`;

function App() {
  const [quotes, setQuotes] = useState([]);
  const [showQuote, setShowQuote] = useState(null);
  const [color, setColor] = useState(randomColor)

  useEffect(() => {
    async function fetchQuotes(){
      try {
        const res = await fetch ("/quotes.json");
        const data = await res.json();
        setQuotes(data);
        setShowQuote(data[0]);
      } catch (err){
        console.log(err);      
      }
    }
    fetchQuotes();
  }, [])

  function displayQuote(){
    setShowQuote(prev => {
      if (quotes.length === 0) return prev;

      let next;
      do {
          next = quotes[Math.floor(Math.random() * quotes.length)];
        } while (prev.showQuote && next === prev.showQuote); // continue rerolling if the current quote is same as the new pick

      return next;
    });
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => { document.body.style.backgroundColor = ''; };
  }, [color]);

  return (
    <>
      {showQuote && (
        <div className='box' style={{ background: "white", padding: "50px", borderRadius: "20px" }}>
          <h1 className='quote' style={{ color }}>"{showQuote.quote}"</h1>
          <h2 className='author' style={{ color }}>{showQuote.author}</h2>
          <button className='btn' style={{ background: color, color: "white", fontSize: "1.3rem", fontWeight: "bolder", padding: "15px" }} onClick={() => {
            displayQuote();
            setColor(randomColor());
          }}
          >Generate New Quote
          </button>
        </div>
    )}
    </>
  )
}

export default App
