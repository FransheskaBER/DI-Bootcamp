import './App.css';
import { Routes, Route, Navigate } from "react-router";
import PrivateRoute from './components/PrivateRoute';
import Login from "./pages/Login.tsx";
import Profile from "./pages/Profile.tsx";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/profile" replace />} />
      <Route path='/login' element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />}/>
      </Route>
      
      <Route path='*' element={<p>404</p>} />
    </Routes>
  );
}

export default App
