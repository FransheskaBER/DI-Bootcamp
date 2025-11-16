import Nav from './pages/nav.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';
import { Routes, Route, Link } from "react-router";
import './App.css'

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/product/:name" element={<Product />}></Route>
      <Route path="*" element={<h1>404 page not found</h1>}></Route>
    </Routes>
    
    </>
  )
}

export default App
