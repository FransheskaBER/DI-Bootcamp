import './App.css';
import MovieList from './components/MovieList.jsx';
import store from './store.js';
import { Provider } from 'react-redux';

function App() {

  return (
    <>
    <Provider store={store}>
      <MovieList />
    </Provider>
    </>
  )
}

export default App
