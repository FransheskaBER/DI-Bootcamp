import { RecipeItem } from "./RecipeItem";

export class RecipeCollection {
    private recipes: RecipeItem[] = []; // internal storage

    constructor() {
        this.recipes = this.LoadFromLocalStorage();
    }

    addRecipe(title: string, ingredients: string[], instructions: string): void {
        const newRecipeItem = new RecipeItem(title, ingredients, instructions);
        this.recipes.push(newRecipeItem);
        this.saveToLocalStorage();
    };

    removeRecipe(id: string): void {
        this.recipes = this.recipes.filter((r) => r.id !== id);
        this.saveToLocalStorage();
    };
    
    toggleFavorite(id: string): void {
        const selectedRecipe = this.recipes.find((r) => r.id === id);
        if (!selectedRecipe) return;
        selectedRecipe.isFavorite = !selectedRecipe.isFavorite;
        this.saveToLocalStorage();
    };
    
    private saveToLocalStorage(): void {
        const convertedData = JSON.stringify(this.recipes);
        localStorage.setItem('recipes', convertedData);
    };
    
    private LoadFromLocalStorage(): RecipeItem[] {
        try {
            const data = localStorage.getItem('recipes');
            if (!data) return [];

            const parsed = JSON.parse(data);
            return parsed.map((item: RecipeItem) => {
                const recipe = new RecipeItem(item.title, item.ingredients, item.instructions);
                recipe.id = item.id;
                recipe.isFavorite = item.isFavorite;
                return recipe;
            });
        } catch (error) {
            console.log("Error loading recipes from localStorage:", error);
            return [];
        }
    };

    getRecipes(): RecipeItem[] {
        return this.recipes;
    };

    getFavRecipes(): RecipeItem[] {
        const favs = this.recipes.filter((r) => r.isFavorite);
        return favs;
    };

    clearAllRecipes(): void {
        this.recipes = [];
        this.saveToLocalStorage();
    };
}