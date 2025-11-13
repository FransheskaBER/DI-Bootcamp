import { useState } from 'react';
import './App.css';
import Modal from './Modal.jsx';

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleClose(){
    setShowModal(false);
  }
  return (
    <>
    <button onClick={() => setShowModal(true)}>Open Error Modal</button>
    {showModal && <Modal onClose={handleClose}/>}
    </>
  )
}

export default App
