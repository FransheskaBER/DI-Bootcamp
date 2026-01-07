import './App.css'
import { Route, Routes, Link, useNavigate } from "react-router";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import { useAuth } from './auth/useAuth';
import axios from 'axios';
import ProtectedRoute from './components/ProtectedRoute';


const BASE_URL = import.meta.env.VITE_API_BASE_URL;


function App() {
  const { logout, isAuth } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/api/user/logout`, {}, {
        withCredentials: true,
      });
      logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      logout();
    }
  }

  return (
    <>
    {/* i would put the div in another component but here it is just for simplicity */}
    <div style={{ display: "flex", gap: "10px" }}>
      <Link to="/">Home</Link>
      { !isAuth && (
        <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </>
        )
      }
      <Link to="/dashboard">Dashboard</Link>
      { isAuth && <button onClick={handleLogout}>Logout</button>}
    </div>
    <Routes>
      <Route path="/" element={<h2>Home page</h2>}></Route>
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
    </>
  )
}

export default App
