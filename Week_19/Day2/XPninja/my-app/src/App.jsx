import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import InventoryList from "./features/InventoryList.jsx";

function App() {

  return (
    <>
    <Provider store={store}>
      <InventoryList />
    </Provider>
    </>
  )
}

export default App
