import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { store } from "./app/store.ts";
import { fetchMe } from './features/auth/authSlice.ts';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';


store.dispatch(fetchMe()); //This is the “persist login via cookie” step. Without it, refresh always looks logged out.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
