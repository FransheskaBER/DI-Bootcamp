import { createSlice } from "@reduxjs/toolkit";


const likeSlice = createSlice({
    name: "likes",
    initialState: { value: 10 },
    reducers: {
        addOne(state) {
            state.items += 1;
        },
        removeOne(state) {
            state.items -= 1;
        },
        addMany(state, action) {
            state.items += action.payload;
        },
    }
})

export const { addOne, addMany } = likeSlice.actions;
export default likeSlice.reducer;