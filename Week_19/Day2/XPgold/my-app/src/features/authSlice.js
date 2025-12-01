import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: null,
        loggedIn: false
    }, 
    reducers: {
        loginUser(state) {
            state.loggedIn = true;
        },
        logoutUser(state) {
            state.loggedIn = false;
            state.currentUser = null;
        },
        setUser(state, action) {
            state.currentUser = action.payload; // { email, password }
        },
    },
});

export const { loginUser, logoutUser, setUser } = authSlice.actions;
export default authSlice.reducer;