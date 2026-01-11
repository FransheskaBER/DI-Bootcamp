import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";


// define type for our recipe data
export interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

interface Ingredients {
    name: string;
    measure: string;
}

export interface RecipeDetails {
    idMeal: string;
    strMeal: string;
    strTags: string | null;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string | null;
    strYoutube: string;
    ingredients: Ingredients[];
}

export interface RecipeState {
    recipes: Recipe[];
    loading: boolean;
    error: string | null;
    recipeDetails: RecipeDetails | null;
}

// initial state
const initialState: RecipeState = {
    recipes: [],
    loading: false,
    error: null,
    recipeDetails: null,
};

// async thunk to fetch recipes by ingredient
export const fetchRecipeByIngredient = createAsyncThunk(
    'recipes/fetchByIngredient',
    async (ingredient: string | undefined, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

            if (!res.ok) {
                throw new Error('Failed to fetch recipes');
            }
            
            const data = await res.json();
            console.log(`API RESPONSE`, data);
            console.log(`Meals Array`, data.meals);            
            return data.meals || [];
        } catch (error) {
            return rejectWithValue(
                error instanceof Error ? error.message : 'An error occurred'
            );
        }
    }
);


export const fetchRecipeDetailsById = createAsyncThunk(
    'recipes/fetchRecipeDetailsById',
    async (id: string, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

            if (!res.ok) {
                throw new Error('Failed to fetch recipes details');
            }
            
            const data = await res.json();
            const meal = data.meals[0];

            console.log("API:", data);
            console.log("Meal:", meal);
            
            

            // transform ingredients into array
            const ingredients = [];
            for (let i = 1; i <=20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];

                if (ingredient && ingredient.trim()) {
                    ingredients.push({
                        name: ingredient.trim(),
                        measure: measure?.trim() || ''
                    });
                }
            }

            return {
                idMeal: meal.idMeal,
                strMeal: meal.strMeal,
                strCategory: meal.strCategory,
                strArea: meal.strArea,
                strInstructions: meal.strInstructions,
                strMealThumb: meal.strMealThumb,
                strTags: meal.strTags,
                strYoutube: meal.strYoutube,
                ingredients
            };
        } catch (error) {
            return rejectWithValue(
                error instanceof Error ? error.message : 'An error occurred'
            );
        }
    }
);

// create the slice
const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        clearRecipes: (state) => {
            state.recipes = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipeByIngredient.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipeByIngredient.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
                state.loading = false;
                state.error = null;
                state.recipes = action.payload;
            })
            .addCase(fetchRecipeByIngredient.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Failed to fetch recipes';
            })
            .addCase(fetchRecipeDetailsById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipeDetailsById.fulfilled, (state, action: PayloadAction<RecipeDetails>) => {
                state.loading = false;
                state.error = null;
                state.recipeDetails = action.payload;
            })
            .addCase(fetchRecipeDetailsById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Failed to fetch recipes';
            });

    },
});

export const { clearRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;



