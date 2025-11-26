import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';

const store = configureStore({
    reducer: {
        // add your reducers here
        counter: counterReducer,
    },
});

export default store;
