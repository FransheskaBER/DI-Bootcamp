import './App.css'
import Navbar from './Navbar.jsx';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Home.jsx';
import Favorites from './Favorites.jsx';
import { useState } from 'react';

function App() {
  const [favs, setFavs] = useState([]);

  function handleAddFavs(favFromHome){
    setFavs((prev) => [ ...prev, favFromHome ]);
  }
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace/>}/>
      <Route path="/home" element={<Home onAddFav={handleAddFavs} />}/>
      <Route path="/favorites" element={<Favorites favorites={favs}/>}/>
    </Routes>
    </>
  );
}

export default App
