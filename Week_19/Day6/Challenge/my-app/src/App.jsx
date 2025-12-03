import './App.css';
import store from "./store/store.js";
import { Provider } from 'react-redux';
import CategoryPage from './features/CategoryManagment/CategoryPage.jsx';
import TaskPage from './features/TaskManagment/TaskPage.jsx';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
    <Provider store={store}>
      <div>
        <h1>Welcome To Your Task Tracker App</h1>
        <nav>
            <Link to="/tasks">Manage Tasks</Link>
        </nav>
        <nav>
            <Link to="/categories">Manage Categories</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </Provider>
    </>
  )
}

export default App
