import { createSlice } from "@reduxjs/toolkit";

type counterState = {
    counter: number;
};

const initialState: counterState = {
    counter: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        reset(state) {
            state.counter = 0;
        },
        incrementByAmount(state, action) {
            state.counter += action.payload;
        }
    }
})

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;