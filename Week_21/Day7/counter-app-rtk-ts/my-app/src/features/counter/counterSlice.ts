import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type CounterState = {
    value: number;
};

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        incrementByVal(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByVal } = counterSlice.actions;
export default counterSlice.reducer;
