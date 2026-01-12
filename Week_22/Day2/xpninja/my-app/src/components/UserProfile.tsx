import { useReducer } from "react";

type Status = "initial" | "loading" | "success" | "error";

type Profile = {
    name: string;
    bio: string;
};

type State = {
    status: Status;
    profile: Profile | null;
    error: string | null;
}

type Action = 
    | { type: 'updateStart' }
    | { type: 'updateSuccess'; payload: Profile }
    | { type: 'updateError', payload: string }
    | { type: 'reset' };

const initialState: State = {
    status: "initial",
    profile: null,
    error: null,
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "updateStart":
            return { ...state, status: "loading", error: null };
        case "updateSuccess":
            return { ...state, status: "success", profile: action.payload, error: null };
        case "updateError":
            return { ...state, status: "error", error: action.payload };
        case "reset":
            return initialState;
        default:
            return state;
    }
}

export default function UserProfile() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleUpdateSuccess() {
        console.log("Starting update...(success)");
        dispatch({ type: "updateStart" })

        setTimeout(() => {
            dispatch({ type: "updateSuccess", payload: { name: "New Name", bio: "New bio" }});
        }, 1000);        
    }

    function handleUpdateError() {
        console.log("Starting update...(error)");
        dispatch({ type: "updateStart" });

        setTimeout(() => {
            dispatch({ type: "updateError", payload: "Something went wrong" })
        }, 1000);
    }

    return (
        <>
        <h1>Exercise 1</h1>

        <div>
            <p>Status: {state.status}</p>
        </div>

        {state.error 
            ? (<p>Error: {state.error}</p>)
            : (state.profile && (
                <div>
                    <p>Name: {state.profile.name}</p>
                    <p>Bio: {state.profile.bio}</p>
                </div>))
        }

        <div>
            <button onClick={handleUpdateSuccess}>Update Profile (success)</button>
            <button onClick={handleUpdateError}>Update Profile (error)</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
        </>
    );
}