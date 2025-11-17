import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [suggestedCountries, setSuggestedCountries] = useState([]);
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");

  async function handleChange(e){
    const value = e.target.value; 
    setInput(value);

    console.log(e.target.value);

    try {
      const res = await fetch("/countries.json");
      if (!res.ok) throw new Error(`Failed request: ${res.status}`);
      const data = await res.json();

      const filtered = data.filter(country => country.toLowerCase().includes(value.toLowerCase()));
      console.log(filtered);
        
      setSuggestedCountries(filtered);
      setTotal(filtered.length);
    } catch (err){
      console.log(err);
    }
  }

  return (
    <>
    <div className='container'>
      <h1>Auto-Completed Countries</h1>
      <input style={{ width: "80%", padding: "5px" }} type="text" name="input" value={input} onChange={handleChange}/>
      {suggestedCountries.map(country => (
        <button className="countryBtn" key={country} value={country} onClick={(e) => {
          setInput(e.target.value);
          setTotal(1);
          setSuggestedCountries([]);
        }}
        >
          {country}
        </button>
      ))}
      <p className='suggestions'>Suggestions: {total}</p>
    </div>
    </>
  )
}

export default App
