import './App.css'
import Counter from './features/counter/Counter'
import TodoList from './features/todoList/TodoList'
import Addtodo from './features/todoList/AddTodo'

function App() {

  return (
    <>
    <h1>Exercise XP - Counter App</h1>
    <Counter />
    <h1>Exercise XP Gold - Todo List App</h1>
    <Addtodo />
    <h3>Todo-List:</h3>
    <TodoList />
    </>
  )
}

export default App
