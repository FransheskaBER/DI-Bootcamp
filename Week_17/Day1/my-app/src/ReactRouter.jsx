// SPA - single page app = it's one html file and JS changes what you see. The URL/"page" changes but the browser doesnt RELOAD

// so REACT ROUTER lets react pretend you have multiple pages while saying on one.

// 1. Installing React Router: npm i react-router-dom
// This gives you components and hooks like: BrowserRouter, Routes, Route, Link, useParams, useLocation


// 2. Wrapping your app with BrowserRouter
// You normally do this in main.jsx / index.jsx:
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// 3. Routes: which "page" should I show?
// basic idea is:
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Routes></Routes> is a group of possible pages
    <Routes>
        {/* "when URL is /about, render the <About /> component" */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}


// 4. <Link> instead of <a> because the latter reload the whole page which it is not good for SPA
import { Link } from "react-router-dom";
<Link to="/about">About</Link>
// no page reload, url changes, Router swaps components, feels like a real website but stays in React




// 5. URL parameters /project/:name & useParams
// we can put variables in the URL like:
{/* <Route path="/project/:name" element={<Project />} /> */}

// If user visits /project/javascript, inside Project you can read name:
import { useParams } from "react-router-dom";
function Project() {
  const { name } = useParams(); // { name: "javascript" }
  return <h3>Project name: {name}</h3>;
}
// So :name becomes whatever is in the URL.




// 6. useLocation (extra info about the URL)
// useLocation() gives you an object describing where you are:
import { useLocation } from "react-router-dom";

function DebugLocation() {
  const location = useLocation();
  console.log(location);
  return <pre>{JSON.stringify(location, null, 2)}</pre>;
}
// So we will get in return stuff like:
// pathname → /project/react
// search → query string (e.g. ?page=2)
// hash, etc.
// You won’t use it every day at first, but it’s handy for debugging or advanced filters.




// 7. Passing props into route components
// You can pass props normally inside element:
<Route path="/about" element={<About hobby="music" />} />

// Then in About:
function About({ hobby }) {
  return <p>I love {hobby}</p>;
}
// So element={<Component ... />} is just JSX; you can do whatever you’d normally do.