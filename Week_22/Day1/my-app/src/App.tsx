import './App.css'
import UserProfile from './features/UserProfile'
import TodoList from './features/TodoList'
import UseReducer from './features/UseReducer'
import { ThemeToggle, Counter, ThemeProvider, ToggleThemeWithContext} from './features/ThemeToggle'

function App() {

  return (
    <>
    <ThemeProvider>
      <h1>Hello Typescript + React!</h1>
      <UserProfile name='Ana' age={45}/>
      <TodoList />
      <UseReducer />
      <ThemeToggle />
      <Counter />
      <ToggleThemeWithContext />
    </ThemeProvider>
    </>
  )
}

export default App
