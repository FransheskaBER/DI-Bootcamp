import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
    users: [],
    status: "",
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async() => {
    const res = await fetch(USERS_URL);
    const data = await res.json();
    return data;
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser(state, action) {
            state.users.push({ id: nanoid(), name: action.payload });
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.status = "failed";
        })
    }

});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;