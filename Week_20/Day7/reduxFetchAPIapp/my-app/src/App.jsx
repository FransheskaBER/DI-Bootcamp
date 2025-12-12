import './App.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import PostsList from './features/posts/PostsList'

function App() {

  return (
    <>
    <Provider store={store}>
      <PostsList />
    </Provider>
    </>
  )
}

export default App
