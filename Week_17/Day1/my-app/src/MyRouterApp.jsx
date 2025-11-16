import { Routes, Route, Link } from "react-router-dom";

export default function MyRouterApp(){
    return (
    <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
            <Route path="/" element={<h1>Welcome Home</h1>}></Route>
            <Route path="/about" element={<h1>About this app</h1>}></Route>
            <Route path="/contact" element={<h1>Contact Us</h1>}></Route>
        </Routes>
    </>
    ); 
}