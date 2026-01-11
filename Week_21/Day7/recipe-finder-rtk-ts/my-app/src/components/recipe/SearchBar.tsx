import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { fetchRecipeByIngredient, clearRecipes } from "../../features/recipe/recipesSlice";
import { useState } from "react";
import { useNavigate } from 'react-router';

export default function SearchBar() {
    const [ingredient, setIngredient] = useState('');
    const [hasSearch, setHasSearch] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // get State from Redux Store
    const { recipes, loading, error } = useAppSelector((state) => state.recipe);

    function handleSearch() {
        if (ingredient.trim()) {
            setHasSearch(true);
            // dispatch the async thunk
            dispatch(fetchRecipeByIngredient(ingredient));
            navigate('/allrecipes');            
        }        
    };

    function handleClear() {
        dispatch(clearRecipes());
        setHasSearch(false);
        setIngredient("");
    };

    return (
        <div>
            <input type="text" value={ingredient} onChange={(e) => setIngredient(e.target.value)} placeholder='Enter ingredient (e.g, chicken_breast)'/>
            <button onClick={handleSearch} disabled={loading}>
                {loading ? "Searching" : "Search"}
            </button>
            <button onClick={handleClear}>Clear Search</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {hasSearch && <p>{recipes.length > 0 ? `Found ${recipes.length} recipes!` : "No recipes found"}</p>}
        </div>
    );
}