import './App.css'
import { useSelector } from "react-redux";
import DisplayCatsAndTodos from './todosManagment/DisplayCatsAndTodos.jsx';
import Register from './authentication/Register.jsx';
import Login from './authentication/Login.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';


function ProtectedRoute({ children }) {
  const access = useSelector(state => state.auth.access);

  if (!access) {
    return <Navigate to="/login" replace />
  }

  return children;
}

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route 
        path="/todosmgnt"
        element={
        <ProtectedRoute>
          <DisplayCatsAndTodos />
        </ProtectedRoute>
      }
      />
    </Routes>
  );
}

export default App

