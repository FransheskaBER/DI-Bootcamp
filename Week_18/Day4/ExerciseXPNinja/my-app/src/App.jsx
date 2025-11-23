import './App.css';
import DisplayTasks from './DisplayTasks.jsx';
import AddTask from './AddTask.jsx';
import { TasksProvider } from './TasksManager.jsx';

function App() {
  return (
    <>
    <TasksProvider>
      <AddTask />
      <DisplayTasks />
    </TasksProvider>
    </>
  )
}

export default App
