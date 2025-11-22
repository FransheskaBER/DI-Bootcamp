import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({ input1: 0, input2: 0, action: ""});
  const [feedback, setFeedback] = useState(null);

  function handleChange(e){
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === "action" ? value : value === "" ? "" : Number(value) }));
  }

  function handleSubmit(e){
    e.preventDefault();
    const total =
      form.action === "a" ? form.input1 + form.input2 :
      form.action === "s" ? form.input1 - form.input2 :
      form.action === "m" ? form.input1 * form.input2 :
      form.action === "d" ? form.input1 / form.input2 :
      0;

    setFeedback(total);
  }


  return (
    <>
    <div className='container'>
      <form className='myForm' onSubmit={handleSubmit}>
        <h3>Adding two numbers: </h3>
        <input type="number" name="input1" value={form.input1} onChange={handleChange}/>
        <input type="number" name="input2" value={form.input2} onChange={handleChange}/>
        <select name="action" value={form.action} onChange={handleChange}>
          <option value="">Select an action</option>
          <option value="a">Addition</option>
          <option value="s">Substraction</option>
          <option value="m">Multiplication</option>
          <option value="d">Division</option>
        </select>
        <button type="submit">Add Them!</button>
      </form>
      <h1 className='feedback'>{feedback}</h1>
    </div>
    

    </>
  )
}

export default App
