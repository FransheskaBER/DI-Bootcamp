import './App.css'
import { Routes, Route, Link } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './pages/ErroBoundary.jsx';
import PostList from './pages/PostList.jsx';
import Example1 from './pages/Example1.jsx';
import Example2 from './pages/Example2.jsx';
import Example3 from './pages/Example3.jsx';

function HomeScreen(){
  return (
    <div>
      <br />
      <h1>Home Page</h1>;
      <hr />
      <PostList />
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  );
}

function ProfileScreen(){
  return <h1>Profile Page</h1>;
}

function ShopScreen(){
  throw new Error("An error has ocurred");
}

function Exercise4(){
  const objData = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  };

  const url = "https://webhook.site/0c9413b7-a074-4f0e-a3a2-c37ab264d282";

  async function sendData(){
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objData),
      });

      console.log("Status:", res.status, "OK:", res.ok);

      const text = await res.json();
      console.log("Body:", text);
    } catch (err) {
      console.log(err);
    }
  }

  return <button onClick={sendData}>Post Data</button>
}


function App() {

  return (
    <>
    <header className="navbar navbar-brand">
      <nav className="container-fluid" style={{ gap: "10px" }}>
        <Link to={'/'}>Home</Link>
        <Link to={'Profile'}>Profile</Link>
        <Link to={'Shop'}>Shop</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<HomeScreen />}></Route>
      <Route path="/profile" element={<ProfileScreen />}></Route>
      <Route path="/shop" element=
      {
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ShopScreen />
        </ErrorBoundary>
      }></Route>
    </Routes>
    <Exercise4/>

    </>
  )
}

export default App
