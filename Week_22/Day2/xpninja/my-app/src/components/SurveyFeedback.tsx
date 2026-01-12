import { useReducer } from "react";

type Status = "initial" | "submitting" | "completed";

type State = {
    status: Status;
    feedback: string;
};

type Action = 
    | { type: "startSurvey" }
    | { type: "submitFeedback", payload: string }
    | { type: "reset", payload: string }


const initialState: State = {
    status: "initial",
    feedback: "",
};

function reducer(state: State, action: Action): State {
    switch(action.type) {
        case "startSurvey":
            return { ...state, status: "initial" };
        case "submitFeedback":
            return { ...state, status: "submitting", feedback: action.payload };
        case "reset":
            return { ...state, status: "completed", feedback: action.payload };
        default:
            return state;
    }
}

export default function SurveyFeedback() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
        <h1>Exercise 2</h1>
        <div>
            <button onClick={() => dispatch({ type: "startSurvey" })}>Start Survey</button>
            <button onClick={() => dispatch({ type: "submitFeedback", payload: "Amazing job!"})}>Submit Feedback</button>
            <button onClick={() => dispatch({ type: "reset", payload: "complete" })}>Reset</button>
        </div>
        <div>
            <p>State: {state.status}</p>
            <p>Feedback: {state.feedback}</p>
        </div>
        </>
    );
}