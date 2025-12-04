import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    status: "",
};

export const delayIncrementAsync = createAsyncThunk("counter/delay", () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(1)
        }, 5 * 1000)
    })
})

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
        //     prepare(a) {
        //         return { payload: a };
        //     },
        // },
    },
    // extraReducers(builder){} -----> this is for Asynchronyous actions --- to do this, we need a third party "redux-thunk"
    extraReducers: (builder) =>  {
        builder
        .addCase(delayIncrementAsync.pending, (state, action) => {
            console.log("pending: ", action);
            state.status = "loading";         
        })
        .addCase(delayIncrementAsync.fulfilled, (state, action) => {
            console.log("fulfilled: ", action);
            state.count += action.payload;
            state.status = "";
        })
        .addCase(delayIncrementAsync.rejected, (state, action) => {
            console.log("rejected: ", action);
            state.status = "error";
        });
    },
});

export const { increment, decrement, reset, addByVal } = counterSlice.actions;
export default counterSlice.reducer;