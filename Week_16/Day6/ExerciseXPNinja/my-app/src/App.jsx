import { useState } from 'react';
import './App.css';
import TextRing from "./Circle.jsx"
import { useEffect } from 'react';

function App() {
  const today = new Date();

  function getWeekOfMonth(date, weekStartsOn = 1) { // 0=Sun … 6=Sat
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const offset = (firstDay.getDay() - weekStartsOn + 7) % 7;
    return Math.floor((date.getDate() + offset - 1) / 7) + 1;
  }

  const [year, setYear] = useState(new Date().getFullYear());
  const [monthNumber, setmonthNumber] = useState(new Date().getMonth());
  const [week, setWeek] = useState(getWeekOfMonth(today));
  const [day, setDay] = useState(new Date().getDay());
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [second, setSecond] = useState(new Date().getSeconds());
  const [month, setMonth] = useState(new Date().toLocaleString('default', { month: 'short' }));

  useEffect(() => {
    const interval = setInterval(() => {
      
      setYear(new Date().getFullYear());
      setmonthNumber(new Date().getMonth());
      setWeek(getWeekOfMonth(today));
      setDay(new Date().getDay());
      setHour(new Date().getHours());
      setMinute(new Date().getMinutes());
      setSecond(new Date().getSeconds());
      setMonth(new Date().toLocaleString('default', { month: 'short' }));

    }, 1000);
    return () => clearInterval(interval);
  }, [])

  const secondsItem = Array.from({ length: 60 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} sec`,
  }));

  const minutesItem = Array.from({ length: 60 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} min`,
  }));

  const hoursItem = Array.from({ length: 24 }, (_, i) => ({
    value: i+1,
    label: `${i + 1} hr`,
  }));

  const daysItem = Array.from({ length: 30 }, (_, i) => ({
    value: i+1,
    label: `Day ${i + 1}`,
  }));

  const weeksItem = Array.from({ length: 4 }, (_, i) => ({
    value: i+1,
    label: `Week ${i}`,
  }));

  const monthNumbersItem = Array.from({ length: 12 }, (_, i) => ({
    value: i,
    label: `Month ${i+1}`,
  }));

  return (
    <>
    <div className='ring'>
      <header className='year' style={{ height: "100vh", paddingLeft: "3rem", paddingTop: "5rem" }}>Year: {year}</header>
      <TextRing items={secondsItem} fontSize={15} SIZE={1250} activeValue={second} scale={10}/>
      <TextRing items={minutesItem} fontSize={15} SIZE={1050} activeValue={minute} scale={10}/>
      <TextRing items={hoursItem} fontSize={15} SIZE={850} activeValue={hour} scale={25}/>
      <TextRing items={daysItem} fontSize={15} SIZE={750} activeValue={day} scale={10}/>
      <TextRing items={weeksItem} fontSize={15} SIZE={750} activeValue={week} scale={52}/>
      <TextRing items={monthNumbersItem} fontSize={15} SIZE={600} activeValue={monthNumber} scale={8}/>
      <span className='footerSpan'>
        <footer className='month' style={{ paddingLeft: "120rem", paddingBottom: "2rem" }}>Month: {month}</footer>
      </span>
    </div>
    </>
  )
}

export default App
