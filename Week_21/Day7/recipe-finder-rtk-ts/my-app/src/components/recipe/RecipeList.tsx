import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";

export default function RecipeList() {
    const recipes = useAppSelector((state) => state.recipe.recipes);

    return (
        <div>
            <h1>Recipes</h1>
            {
                recipes.length > 0 && recipes.map(r => (
                    <div key={r.idMeal}>
                        <h2>{r.strMeal}</h2>
                        <img src={r.strMealThumb} width="100px"/><br />
                        <Link to={`/recipe/${r.idMeal}`}>See more details</Link>
                    </div>
                ))
            }
        </div>
    );
}