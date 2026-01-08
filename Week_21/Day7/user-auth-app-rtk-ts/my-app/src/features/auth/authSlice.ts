import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

const API_BASE = import.meta.env.VITE_API_BASE as string;

export type User = {
    id: string;
    email: string;
    username: string;
    bio: string;
    created_at: string;
    updated_at: string;
};

type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
    status: "idle" | "loading" | "failed";
    error: string | null;
    didInit: boolean;
};

type RegisterPayload = {
    email: string;
    username: string;
    password: string;
};

type LoginPayload = {
    email: string;
    password: string;
};

type ProfilePayload = {
    username?: string;
    bio?: string;
};

async function safeJson(res: Response) {
    try {
        return await res.json();
    } catch {
        return null;
    }
}

function getErrorMessage(data: any, fallback: string) {
    return (data && typeof data.error === "string" && data.error) ? data.error : fallback;
}

export const register = createAsyncThunk<User, RegisterPayload, { rejectValue: string }>(
    "auth/register",
    async (payload, thunkApi) => {
        try {
            const res = await fetch(`${API_BASE}/api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload),
            });
            const data = await safeJson(res);
            if (!res.ok) {
                return thunkApi.rejectWithValue(getErrorMessage(data, "Register failed"));
            }

            if (!data?.user) {
                return thunkApi.rejectWithValue("Bad server response (missing user).");
            }
            return data.user as User;
        } catch (err) {
            return thunkApi.rejectWithValue(err instanceof Error ? err.message : "Register failed");
        }
    }
);

export const login = createAsyncThunk<User, LoginPayload, { rejectValue: string }>(
    "auth/login",
    async(payload, thunkApi) => {
        try {
            const res = await fetch(`${API_BASE}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload),
            }); 
            const data = await safeJson(res);
            if (!res.ok) {
                return thunkApi.rejectWithValue(getErrorMessage(data, "Login failed"));
            }

            if (!data?.user) {
                return thunkApi.rejectWithValue("Bad server response (missing user).");
            }
            return data.user as User;
        } catch (err) {
            return thunkApi.rejectWithValue(err instanceof Error ? err.message : "Login failed"); // the "thunkApi.rejectwithvalue" lets me put a custom error into the action.payload
        }
    }
);

export const fetchMe = createAsyncThunk<User, void, { rejectValue: string }>(
    "auth/me",
    async (_, thunkApi) => {
        try {
            const res = await fetch(`${API_BASE}/api/auth/me`, {
                method: "GET",
                credentials: "include",
            }); 
            const data = await safeJson(res);
            if (res.status === 401) {
                return thunkApi.rejectWithValue("UNAUTH");
            }
            if (!res.ok) {
                return thunkApi.rejectWithValue(getErrorMessage(data, "Failed to fetch session"));
            }

            if (!data?.user) {
                return thunkApi.rejectWithValue("Bad server response (missing user).");
            }
            return data.user as User;
        } catch (err) {
            return thunkApi.rejectWithValue(err instanceof Error ? err.message : "Not authenticated");
        }
    }
);

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
    "auth/logout",
    async (_, thunkApi) => {
        try {
            const res = await fetch(`${API_BASE}/api/auth/logout`, {
                method: "POST",
                credentials: "include",
            }); 
            const data = await safeJson(res);
            if (!res.ok) {
            return thunkApi.rejectWithValue(getErrorMessage(data, "Logout failed"));
            }
        } catch (err) {
            return thunkApi.rejectWithValue(err instanceof Error ? err.message : "Logout failed");
        }
    }
);

export const updateProfile = createAsyncThunk<User, ProfilePayload, { rejectValue: string }>(
  "auth/updateProfile",
  async (payload, thunkApi) => {
    try {
        const res = await fetch(`${API_BASE}/api/auth/profile`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(payload),
        });
        const data = await safeJson(res);
        if (!res.ok) {
            return thunkApi.rejectWithValue(getErrorMessage(data, "Update failed"));
        }
        if (!data?.user) {
            return thunkApi.rejectWithValue("Bad server response (missing user).");
        }
        return data.user as User;
    } catch (err) {
        return thunkApi.rejectWithValue(err instanceof Error ? err.message : "Update failed");
    }
  }
);

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    status: "idle",
    error: null,
    didInit: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearError(state) {
            state.error = null;
        },
        setAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
        },
    },
    extraReducers: (builder) => {
        const pending = (state: AuthState) => {
            state.status = "loading";
            state.error = null;
        };
        const failed = (state: AuthState, action: any) => {
            state.status = "failed";
            state.error = action.payload === "UNAUTH" ? null : (action.payload ?? "Request failed");
        };

        builder.addCase(register.pending, pending);
        builder.addCase(register.fulfilled, (state, action) => {
            state.status = "idle";
            state.user = action.payload;
            state.isAuthenticated = true;
            state.didInit = true;

        });
        builder.addCase(register.rejected, failed);

        builder.addCase(login.pending, pending);
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = "idle";
            state.user = action.payload;
            state.isAuthenticated = true;
            state.didInit = true;
        });
        builder.addCase(login.rejected, failed);

        builder.addCase(fetchMe.pending, pending);
        builder.addCase(fetchMe.fulfilled, (state, action) => {
            state.status = "idle";
            state.user = action.payload;
            state.isAuthenticated = true;
            state.didInit = true;
        });
        builder.addCase(fetchMe.rejected, (state, action) => {
            // Not logged in is a normal state, not an "error"
            state.status = "idle";
            state.user = null;
            state.isAuthenticated = false;
            state.didInit = true;

            // show an error ONLY if it's NOT normal unauth case
            state.error = action.payload === "UNAUTH" ? null : (action.payload ?? "Request failed");
        });

        builder.addCase(logout.pending, pending);
        builder.addCase(logout.fulfilled, (state) => {
            state.status = "idle";
            state.user = null;
            state.isAuthenticated = false;
            state.didInit = true;
        });
        builder.addCase(logout.rejected, failed);

        builder.addCase(updateProfile.pending, pending);
        builder.addCase(updateProfile.fulfilled, (state, action) => {
            state.status = "idle";
            state.user = action.payload;
            state.isAuthenticated = true;
        });
        builder.addCase(updateProfile.rejected, failed);
    },
});

export const { clearError, setAuthenticated } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;





