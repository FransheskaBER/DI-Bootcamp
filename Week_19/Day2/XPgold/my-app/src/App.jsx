import './tailwind.css';
import Content from './features/Content.jsx';
import { Provider } from 'react-redux';
import store from "./store/store.js";

function App() {

  return (
    <>
    <Provider store={store}>
      <Content />
    </Provider>
    </>
  )
}

export default App
