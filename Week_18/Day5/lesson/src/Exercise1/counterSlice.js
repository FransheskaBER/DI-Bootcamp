import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

const counterSlice = createSlice({ 
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },
});

// export the action creator
export const { increment } = counterSlice.actions;

// export the reducer
export default counterSlice.reducer