import { RecipeItem } from "../model/RecipeItem";

export class RecipeTemplate {
    private container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    render(recipes: RecipeItem[], onDelete: (id: string) => void, onToggleFavorite: (id: string) => void): void {
        this.container.innerHTML = '';

        recipes.forEach(recipe => {
            const card = document.createElement("div");
            const title = document.createElement("h2");
            const instructions = document.createElement("p");
            const ingredients = document.createElement("ul");
            const deleteBtn = document.createElement("button");
            const addFavBtn = document.createElement("button");

            card.id = recipe.id;
            title.textContent = recipe.title;
            instructions.textContent = recipe.instructions;
            deleteBtn.textContent = "Delete Recipe";
            addFavBtn.textContent = recipe.isFavorite ? "Remove from Favorites" : "Add to Favorites";

            recipe.ingredients.forEach((i) => {
                const li = document.createElement("li");
                li.textContent = i;
                ingredients.appendChild(li);
            });

            deleteBtn.addEventListener('click', () => onDelete(recipe.id));
            addFavBtn.addEventListener('click', () => onToggleFavorite(recipe.id));

            card.append(title, ingredients, instructions, deleteBtn, addFavBtn);
            this.container.appendChild(card);
        });
    }
}