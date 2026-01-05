import './App.css'
import Heading from './components/Heading'
import Section from './components/Section'
import List from './components/List'

import { useState, useEffect, useRef, useMemo, useCallback, type ChangeEvent, type ChangeEventHandler, useContext, createContext } from 'react'

type Monster = {
  id: number;
  username: string;
}


interface AuthContextType {
  token: string;
  userId: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);


function App() {
  const [count, setCount] = useState<number>(0);
  const [monsters, setMonsters] = useState<Monster[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const strRef = useRef<string>("");
  
  const heavyTask = (): number => 100;
  const result = useMemo<number>(() => heavyTask(), []);


  const increment = useCallback((): void => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback((): void => {
    setCount((prevCount) => prevCount - 1);
  }, []); 


  useEffect(() => {
    return (): void => console.log("unmount");
  }, []);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   if (inputRef.current) {
  //     inputRef.current.value = e.target.value;
  //   }
  // };

  // There is also MouseEventHandler, KeyboardEventHandler, FocusEventHandler, etc.
  // the MouseEventHandler is used for mouse events like click, mouseover, mouseout, etc.
  // the KeyboardEventHandler is used for keyboard events like keydown, keyup, keypress, etc.
  // the FocusEventHandler is used for focus events like focus, blur, etc.

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    if (inputRef.current) {
      inputRef.current.value = e.target.value;
    }
  };

  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>

    <Heading title='This is my amazing title' subtitle='My subtitle'/>
    <Section>
      <>
      <h3>Child 1</h3>
      <h3>Child 2</h3>
      <h3>Child 3</h3>
      </>
    </Section>
    <List items={['Item 1', 'Item 2', 'Item 3', 'Item 4']}/>
    <input type="text" onChange={handleChange}/>
    </>
  )
}

export default App
