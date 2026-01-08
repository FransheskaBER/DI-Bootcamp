import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

//Without PersistGate, the store still rehydrates, but you might briefly
// render with empty state before the persisted data arrives. This makes it smooth and predictable.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
