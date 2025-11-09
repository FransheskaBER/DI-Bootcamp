import './App.css';
import Hello from './Hello.jsx';
import users from './users.json';
import UserCard from './UserCard.jsx';

function App() {
  return (
    <>
    <h1>Components / props / CSS </h1>
    <Hello />
    {users.map((user, index) => (
      <UserCard key={index} name={user.name} email={user.email} username={user.username}/>
    ))}
    </>
  )
}

export default App
