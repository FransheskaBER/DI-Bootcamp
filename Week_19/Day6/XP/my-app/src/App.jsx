import './App.css'
import BookList from './features/BookList.jsx';
import store from "./store/store.js";
import { Provider } from "react-redux";

function App() {

  return (
    <>
    <Provider store={store}>
      <BookList />
    </Provider>
    </>
  )
}

export default App
