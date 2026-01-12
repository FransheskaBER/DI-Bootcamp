import { useReducer } from "react";

type Fields = {
    name?: string;
    email?: string;
    message?: string;
}

type State = {
    formFields: Fields;
    submitted: boolean;
};

type Action = 
    | { type: "updateField", payload: { field: keyof Fields; value: string } }
    | { type: "resetForm" }
    | { type: "complete" }

const initialState: State = {
    formFields: { name: "Default", email: "Default", message: "Default"},
    submitted: false,
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "updateField":
            return {
                ...state,
                formFields: { ...state.formFields, [action.payload.field]: action.payload.value }
            };
        case "resetForm":
            return initialState;
        case "complete":
            return {...state, submitted: true };
        default:
            return state;
    }
}

export default function FormManager() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        dispatch({
            type: "updateField",
            payload: { field: name as keyof Fields, value }
        });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        dispatch({ type: "complete" });
        console.log("Form Submitted:", state.formFields);
    }

    return (
        <>
        <h1>Exercise 3</h1>
    
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={state.formFields.name} onChange={handleChange}/>
            <input type="text" name="email" value={state.formFields.email} onChange={handleChange} />
            <textarea name="message" value={state.formFields.message} onChange={handleChange}></textarea>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => dispatch({ type: "resetForm" })}>Reset</button>
        </form>

        {state.submitted && (
            <div>
                <p>Name: {state.formFields.name}</p>
                <p>Email: {state.formFields.email}</p>
                <p>Message: {state.formFields.message}</p>
            </div>
        )}
        </>
    );
}