import './App.css';
import { TasksProvider } from './TaskMgmnContext.jsx';
import AddNewTask from './AddNewTask.jsx';
import DisplayAllTasks from './DisplayAllTasks.jsx';
import FilterTasks from './FilterTasks.jsx';

function App() {

  return (
    <>
    <div className="app-shell">
      <h1>Task Management</h1>
      <TasksProvider>
        <div className="row">
          <FilterTasks />
        </div>
        <div className="row">
          <AddNewTask />
        </div>
        <DisplayAllTasks />
      </TasksProvider>
    </div>
    </>
  )
}

export default App
