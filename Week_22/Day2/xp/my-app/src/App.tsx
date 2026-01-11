import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import UserList from './components/UserList';

function App() {

  return (
    <>
    <Greeting name='Fransheska' messageCount={5}/>
    <hr />
    <Counter />
    <hr />
    <UserCard name='Fransheska'age={56} role='Developer'/>
    <hr />
    <UserList />
    </>
  )
}

export default App
