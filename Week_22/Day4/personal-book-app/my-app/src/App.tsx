import './App.css';
import BookInput from './components/BookInput';
import BookList from './components/BookList';
import FilterBooks from './components/FilterBooks';

function App() {

  return (
    <>
    <BookInput />
    <hr />
    <h3>Your Books</h3>
    <FilterBooks />
    <BookList />
    </>
  )
}

export default App
