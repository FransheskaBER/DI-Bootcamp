import './App.css';
import Button from './TScomponents/Button.tsx';
import Profile from './TScomponents/Profile.tsx';
import Counter from './TScomponents/classComponents.tsx';
import { Widget, Button2 } from './TScomponents/Widget.tsx';
import UserCard from './TScomponents/UserCard.tsx';

function App() {
  return (
    <>
    <Button label="Click Me"/>
    <Profile name="Fransheska" age={35}/>
    <Counter initial={0}/>
    <Widget a={45} b="hello"/>
    <Button2 size="Large" label="Add Me"/>
    <UserCard 
    first="Fransheska"
    last="Echevarria"
    city="Tel Aviv"
    country="Israel"
    age={32}
    status="active"
    >
      <button>Edit Profile</button> {/* this is the children we pass */}
    </UserCard>
    </>
  )
}

export default App
