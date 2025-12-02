import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        reset(state) {
            state.count = 0;
        },
        addByVal(state, action) {
            const { a, b } = action.payload; 
            state.count += (Number(a) + Number(b))
        },
        // addByValPrepare: {
        //     reducer(state, action) {
        //         state.count += action.payload;
        //     },
        //     prepare(a, b) {
        //         return { payload: a + b };
        //     },
        // },
    },
    // extraReducers(builder){} -----> this is for Asynchronyous actions --- to do this, we need a third party "redux-thunk"
});

export const { increment, decrement, reset, addByVal } = counterSlice.actions;
export default counterSlice.reducer;