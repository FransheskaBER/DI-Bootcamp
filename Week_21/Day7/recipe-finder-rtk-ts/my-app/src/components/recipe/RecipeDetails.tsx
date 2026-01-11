import { fetchRecipeDetailsById } from "../../features/recipe/recipesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function RecipeDetails() {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    // get data from redux state
    const { recipeDetails, loading, error } = useAppSelector((state) => state.recipe);

    // fetch recipe details when component mounts or id changes
    useEffect(() => {
        if (id) {
            dispatch(fetchRecipeDetailsById(id));
        }
    }, [id, dispatch]);

    // Loading state
    if (loading) return <p>Loading recipe details...</p>;
    
    // Error state
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
    
    // No data yet
    if (!recipeDetails) return <p>No recipe details found</p>;

    console.log(recipeDetails);
    
    
    return (
        <div>
            <h1>{recipeDetails.strMeal}</h1>
            <img src={recipeDetails.strMealThumb || ''} width="100px" />

            <h2>Category: {recipeDetails.strCategory}</h2>
            <h3>Cuisine: {recipeDetails.strArea}</h3>
            
            {recipeDetails.strTags && <p>Tags: {recipeDetails.strTags}</p>}

            <h3></h3>
            <div>
                <h4>Ingredients:</h4>
                <ul>
                    {recipeDetails.ingredients.map((item, index) => (
                        <li key={index}>
                            {item.measure} {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <h3>Instructions</h3>
            <p>{recipeDetails?.strInstructions}</p>
            {recipeDetails.strYoutube && (
                <a href={recipeDetails.strYoutube} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                </a>
            )}
        </div>
    )
}