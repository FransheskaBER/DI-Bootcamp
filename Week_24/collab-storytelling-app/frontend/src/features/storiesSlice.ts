import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Story } from "../../../types/index";


interface StoriesState {
    stories: Story[];
    currentStory: Story | null;
    loading: boolean;
    error: string | null;
}

const initialState: StoriesState = {
    stories: [],
    currentStory: null,
    loading: false,
    error: null,
};

const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        setStories(state, action: PayloadAction<Story[]>) {
            state.stories = action.payload;
            state.loading = false;
            state.error = null;
        },
        setCurrentStory(state, action: PayloadAction<Story>) {
            state.currentStory = action.payload;
        },
        addStory(state, action: PayloadAction<Story>) {
            state.stories.unshift(action.payload); // unshift = add to the beginning
        },
        updateStory(state, action: PayloadAction<Story>) {
            const index = state.stories.findIndex((s) => s.id === action.payload.id);
            if (index !== -1) {
                state.stories[index] = action.payload;
            }
            if (state.currentStory?.id === action.payload.id) {
                state.currentStory = action.payload;
            }
        },
        removeStory(state, action: PayloadAction<number>) {
            state.stories = state.stories.filter((s) => s.id !== action.payload);
            if (state.currentStory?.id === action.payload) {
                state.currentStory = null;
            }
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { setStories, setCurrentStory, addStory, updateStory, removeStory, setLoading, setError } = storiesSlice.actions;
export default storiesSlice.reducer;