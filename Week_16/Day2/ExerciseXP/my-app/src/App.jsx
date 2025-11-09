import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserFavAnimals from './UserFavAnimals.jsx'
import Exercise from './Exercise3.jsx'


const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

export default function App() {
  const myelement = <h1>I love JXS!</h1>;
  const sum = 5 + 5;

  return (
    <>
    {/* Exercise 1 */}
    <div>
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better than JSX</p>
    </div>
    {/* Exercise 2 */}
    <div>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <h3>Animals:</h3>
      <UserFavAnimals favAnimals={user.favAnimals} />
    </div>
    {/* Exercise 3 */}
    <Exercise />
    </>
  );
}
