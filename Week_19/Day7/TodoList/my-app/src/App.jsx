import './App.css'
import store from "./store/store.js";
import { Provider } from 'react-redux';
import DisplayTodos from './features/DisplayTodos.jsx';

function App() {

  return (
    <>
    <Provider store={store}>
      <DisplayTodos />
    </Provider>
    </>
  )
}

export default App
