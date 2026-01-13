import './style.css';
import { RecipeCollection } from './model/RecipeCollection';
import { RecipeTemplate } from './templates/RecipeTemplate';
// import { RecipeItem } from './model/RecipeItem';

// const testRecipe = new RecipeItem('Pancakes', ['flour', 'eggs', 'milk'], 'Mix and fry');
// console.log(testRecipe);


const container = document.getElementById("recipeContainer") as HTMLElement;
if (!container) throw new Error("Recipe container not found");

const collection = new RecipeCollection();
const template = new RecipeTemplate(container);

function render() {
  template.render(
    collection.getRecipes(),
    (id) => {
      collection.removeRecipe(id);
      render();
      renderFavs(); 
      // collection.removeRecipe(id) removes the recipe from the array
      // BUT the UI still shows the old recipe! The DOM doesn't automatically update
      // You need to call render() again to update the UI with the new data
    },
    (id) => {
      collection.toggleFavorite(id);
      render();
      renderFavs();
    },
  )
}

render();

const form = document.getElementById('recipeEntryForm') as HTMLFormElement;
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('recipeTitle') as HTMLInputElement;
  const ingredients = document.getElementById('ingredients') as HTMLTextAreaElement;
  const instructions = document.getElementById('instructions') as HTMLTextAreaElement;

  const splitIngredients = ingredients.value.split("\n").filter(i => i.trim());

  collection.addRecipe(title.value, splitIngredients, instructions.value);
  render();
  form.reset();
});


const favRecipes = document.getElementById("favRecipes") as HTMLDivElement;
if (!favRecipes) throw new Error("Favorites container not found");

const favTemplate = new RecipeTemplate(favRecipes);

function renderFavs() {
  favTemplate.render(
    collection.getFavRecipes(),
    (id) => {
      collection.removeRecipe(id);
      render();
      renderFavs(); 
      // collection.removeRecipe(id) removes the recipe from the array
      // BUT the UI still shows the old recipe! The DOM doesn't automatically update
      // You need to call render() again to update the UI with the new data
    },
    (id) => {
      collection.toggleFavorite(id);
      render();
      renderFavs();
    },
  )
}

renderFavs();

const clearRecipes = document.getElementById("clearRecipesButton") as HTMLButtonElement;
clearRecipes.addEventListener('click', () => {
  if (confirm("Are you sure you want to delete all recipes?")) {
    collection.clearAllRecipes();
    render();
    renderFavs();
  }
});
