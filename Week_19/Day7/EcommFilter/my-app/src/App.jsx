import './App.css';
import store from "./store.js";
import { Provider } from "react-redux";
import ProductList from "./components/ProductList.jsx";

function App() {
  return (
    <>
    <Provider store={store}>
      <ProductList />
    </Provider>
    </>
  )
}

export default App
