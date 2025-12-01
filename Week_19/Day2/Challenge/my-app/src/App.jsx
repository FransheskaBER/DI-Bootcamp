import './App.css';
import { Provider } from 'react-redux';
import store from "./store/store.js";
import TasksList from './features/TasksList.jsx';

function App() {

  return (
    <>
    <Provider store={store}>
      <TasksList />
    </Provider>
    </>
  )
}

export default App
