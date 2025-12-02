import './App.css';
import store from './store/store.js';
import { Provider } from 'react-redux';
import Counter from './features/counter/counter.jsx';

function App() {


  return (
    <>
    <h1>Redux Toolkit - RTK</h1>
    <Provider store={store}>
      <Counter />

    </Provider>
    </>
  )
}

export default App
