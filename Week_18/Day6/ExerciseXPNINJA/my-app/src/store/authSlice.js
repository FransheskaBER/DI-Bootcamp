import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        users: [],
        currentUser: null,
        access: false,
        error: null
    },
    reducers: {
        register(state, action) {
            const { id, name, email, password } = action.payload;

            const existingUser = state.users.find(user => user.email === email);
            if (existingUser) {
                state.error = "Email already registered. Login instead or use another email.";
                return;
            }
            
            const newUser = { id, name, email, password };
            state.users.push(newUser);
            state.currentUser = newUser;
            state.access = true;
            state.error = null;
        },
        login(state, action) {
            const { email, password } = action.payload;
            const existingUser = state.users.find(user => user.email === email && user.password === password);
            if (!existingUser){
                state.error = "Wrong credentials."
                state.currentUser = null;
                state.access = false;
                return;
            }
            state.currentUser = existingUser;
            state.error = null;
            state.access = true;
        },
        logout(state) {
            state.currentUser = null;
            state.error = null;
            state.access = false;
        },
    }
})

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;