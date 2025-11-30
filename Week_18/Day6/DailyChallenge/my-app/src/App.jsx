import './App.css';
import AddTask from './AddTask.jsx';
import { useState } from 'react';
import Calendar from 'react-calendar';
import DisplayTasks from './DisplayTasks.jsx';
import { useSelector } from 'react-redux';

function App() {
  const [value, setValue] = useState(new Date());
  const tasks = useSelector(state => state.tasks);

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <>
      <div className='addTask'>
        <Calendar onChange={onChange} value={value} tileClassName={({ date }) => {
          return tasks.some(t => t.date === date.toLocaleDateString()) ? "task-date" : "null"
        }}/>
        <AddTask date={value.toLocaleDateString()} />
      </div>
      <DisplayTasks date={value.toLocaleDateString()} />
    </>
  );
}

export default App
