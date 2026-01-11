import './App.css';
import SearchBar from './components/recipe/SearchBar';
import RecipeList from './components/recipe/RecipeList';
import RecipeDetails from './components/recipe/RecipeDetails';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<SearchBar />} />
      <Route path='/allrecipes' element={<RecipeList />}/>
      <Route path='/recipe/:id' element={<RecipeDetails />}/>
    </Routes>
    </>
  )
}

export default App
