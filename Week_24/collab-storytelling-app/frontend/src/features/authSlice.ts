import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    username: string;
    email: string;
    avatar_url?: string;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // store user info and token after login/register
        setCredentials(state, action: PayloadAction<{ user: User; accessToken: string }>) {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.user = null;
            state.accessToken = null;
            state.isAuthenticated = false;
        },
        // update token after refresh (keep user logged in)
        updateAccessToken(state, action: PayloadAction<string>) {
            state.accessToken = action.payload;
        },
    },
});

export const { setCredentials, logout, updateAccessToken } = authSlice.actions;
export default authSlice.reducer;
