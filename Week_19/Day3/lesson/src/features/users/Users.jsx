import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser } from "./usersSlice";

export default function Users() {
    const dispatch = useDispatch();
    const userRef = useRef();
    const users = useSelector(state => state.usersReducer.users);
    const status = useSelector(state => state.usersReducer.status);

    // to dispatch fetch users, use useEffect:
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (status === "loading") return <h1>Loading...</h1>
    
    return (
        <>
        <div>
            <input type="text" placeholder="User name" ref={userRef}/>
            <button onClick={() => dispatch(addUser(userRef.current.value))}>Add User</button>
        </div>
        {
            users && users.map(user => {
                return <div key={user.id}>{user.name}</div>
            })
        }
        </>
    );
}