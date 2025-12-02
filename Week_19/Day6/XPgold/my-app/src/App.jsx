import './App.css';
import { Provider } from 'react-redux';
import store from "./store/store.js";
import ShoppingCart from "./features/ShoppingCart.jsx";

function App() {

  return (
    <>
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
    </>
  )
}

export default App
