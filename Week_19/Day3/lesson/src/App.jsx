import './App.css';
import store from './store/store.js';
import { Provider } from 'react-redux';
import Counter from './features/counter/counter.jsx';
import Users from './features/users/Users.jsx';

function App() {


  return (
    <>
    <h1>Redux Toolkit - RTK</h1>
    <Provider store={store}>
      <Counter />
      <hr />
      <Users />

    </Provider>
    </>
  )
}

export default App
