import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

// EXERCISE 1:

// slice
const lessonSlice = createSlice({
    name: "lesson",
    initialState: {
        users: [
            { id: 1, name: "Alice", online: true },
            { id: 2, name: "Bob", online: false },
            { id: 3, name: "Charlie", online: true },
        ],
        search: {
            query: "",
        }
    },
    reducers: {

    },
});


// the SELECTOR function:
// const selectUsers = state => state.users;

export const selectOnlineUsers = createSelector(
    [selectUsers],
    users => users.filter(user => user.online === true)
);

// The component using the selector:
export default function OnlineUsersList() {
    const onlineUsers = useSelector(selectOnlineUsers);

    return (
        <ul>
            {onlineUsers.map(u => (
                <li>{u.name}</li>
            ))}
        </ul>
    );
};


// EXERCISE 2:

// selector function
const selectUsers = state => state.users;
const selectSearchQuery = state => state.search.query;

export const selectFilteredOnlineUsers = createSelector(
    [selectUsers, selectSearchQuery],
    (users, query) => users.filter(user => user.online === true && user.name.toLowerCase().includes(query.toLowerCase())),
)

// component:
export default function FilteredOnlineUsersList() {
    const dispatch = useDispatch();
    const selectedUsers = useSelector(selectFilteredOnlineUsers);
    const query = useSelector(selectSearchQuery);

    return (
        <>
        <input type="text" value={query} onChange={(e) => dispatch(updateQuery(e.target.value))}/>
        <ul>
            {selectedUsers.map(u => (
            <li key={u.id}>{u.name}</li>
            ))}
        </ul>
        </>
    );
};