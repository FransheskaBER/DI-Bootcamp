import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: 0 },
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

export const { addOne, removeOne, addMany } = cartSlice.actions;
export default cartSlice.reducer;

