import './App.css'
import { useState, useEffect } from "react";

function GetApiHeader(){
  const [header, setHeader] = useState("");

  useEffect(() => {

    async function fetchHello(){
      try{
        const res = await fetch("http://localhost:5500/api/hello");
        if (!res.ok) throw new Error(`Failed request: ${res.status}`);
        const data = await res.json();      
        setHeader(data.message);
      } catch(err){
        console.log(err);
      }
    };

    fetchHello();

  }, []);

  return (
    <header>{header}</header>
  );
}


function PostApiForm(){
  const [form, setForm] = useState({ input: "" });
  const [feedback, setFeedback] = useState("");

  function handleChange(e){
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e){
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5500/api/world",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error (`Failed request: ${res.status}`);
      const data = await res.json();
      setFeedback(data.message);
      console.log(form);
    } catch(err){
      console.log(err);        
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="input" value={form.input} onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
      <p>{feedback}</p>
    </div>
  );
}



function App() {
  return (
    <>
    <GetApiHeader />
    <PostApiForm />
    </>
  )
}
export default App
