import './App.css';
import { Provider } from "react-redux";
import store from "./store/todoStore.js";
import AddTodo from "./AddTodo.jsx";
import DisplayTodos from "./DisplayTodos.jsx";

function App() {
  return (
    <>
    <Provider store={store}>
      <h1>To-do List Management App:</h1>
      <AddTodo />
      <hr />
      <h1>Your to-do list:</h1>
      <DisplayTodos />
    </Provider>
    </>
  )
}

export default App
