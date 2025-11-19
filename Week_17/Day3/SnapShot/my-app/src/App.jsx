import SnapShotPage from "./SnapShotPage.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/nature" replace />}></Route>
      <Route path="/:query" element={<SnapShotPage />}></Route>
    </Routes>
    </>
  );
}

export default App
