import './App.css';
import { Provider } from 'react-redux';
import store from './Exercise1/store.js';
import CounterComponent from './Exercise1/Counter.jsx';

function App() {


  return (
    <>
    {/* Exercise 1 */}
    <Provider store={store}>
      <CounterComponent />
    </Provider>


    {/* Exercise 2 */}
    </>
  )
}

export default App
