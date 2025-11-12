import './App.css';
import User from './User.jsx';
import users from './users.json';
import Counter from './Counter.jsx';
import Name from './Name.jsx';
import { useState } from 'react';

// console.log(users);

function App() {
  const [users, setUsers] = useState();

  const getUsers = async() => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json();
      setUsers(data);
    } catch (err){
      console.log(err);
    }
  }

  // let count = 0;
  // function increment(){
  //   count++;
  //   console.log(count);
  // }

  // function handleChange(e){
  //   console.log(e.target.value);
  // }

  return (
    <>
    {/* {users && users.map(item => {
        return <User name={item.name}/>;
      })} */}
{/* 
      <div>
        <input type="text" onChange={(e) => handleChange(e)} />
      </div> */}
      <button onClick={getUsers}>Get Users</button>
      <Counter />
      <Name />
    </>
  )
}

export default App
