import './App.css'
import { Provider } from 'react-redux';
import store from './store/store.js';
import AddTodo from './features/AddTodo.jsx';
import TodoList from './features/TodoList.jsx';

function App() {
  return (
    <>
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
    </>
  )
}

export default App
