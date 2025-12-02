import './App.css'
import store from './store/store.js';
import { Provider } from "react-redux";
import TodoList from './features/todoList/TodoList.jsx';


function App() {

  return (
    <>
    <Provider store={store}>
      <TodoList />
    </Provider>
    </>
  )
}

export default App
