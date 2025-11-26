import './App.css'
import { Provider } from "react-redux";
import store from "./store/store.js";
import DisplayCatsAndTodos from './DisplayCatsAndTodos.jsx';

function App() {

  return (
    <>
    <Provider store={store}>
      <DisplayCatsAndTodos />
    </Provider>
    </>
  )
}

export default App
