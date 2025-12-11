import { useState, useReducer, createContext, useContext } from "react";
// USESTATE WITH TS
const [enabled, setEnabled] = useState(false);

type User = {
    id: number;
    name: string;
};
const [user, setUser] = useState<User | null>(null);

type Theme = "light" | "dark";
function ThemeToogle() {
    const [theme, setTheme] = useState<Theme>("light"); 
    const handleToogle = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    // return (
    //     <button onClick={handleToogle}>Current Theme: {theme}</button>
    // );
}


// USEREDUCER WITH TS
// With useReducer, you have a state type, action type and reducer function that handles each action.
type State = {
    count: number;
}
type Action = | { type: "increment" } | { type: "decrement" } | { type: "reset"; payload: number };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "increment": return { count: state.count + 1 };
        case "decrement": return { count: state.count - 1 };
        case "reset": return { count: action.payload };
        default:
            return state;
    }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
// the reducer return a new state but never mutates
// TS knows that when action.type is "reset" a payload exists

type CounterAction = | { type: "increment" } | { type: "decrement" } | { type: "set"; payload: number };

type Statee = { count: number };
type Actionn = | { type: "increment" } | { type: "decrement" } | { type: "set"; payload: number };
function reducer(state: Statee, action: Actionn): Statee {
    switch (action.type) {
        case "increment": return { count: state.count + 1 };
        case "decrement": return { count: state.count -1 };
        case "set": return { count: action.payload };
        default:
            return state;
    }
}
function CounterComponent() {
    const [state, dispatch] = useReducer(reducer, { count: 0} );
    // return (
    //     <>
    //     <p>Count: ${state.count}</p>
    //     <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    //     <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    //     <button onClick={() => dispatch({ type: 'set', payload: 0 })}>Reset</button>
    //     </>
    // );

}

// USECONTEXT WITH TS
// useContext lets you share state or values across the components tree without drilling props
// you have:
// A type for the context value
// A context created with createContext
// A provider component that wraps children
// A custom hook that uses useContext to read the value

type Color = "white" | "black";
const ColorContext = createContext<Color>("white"); // ColorContext can only hold white and black
const useColor = () => useContext(ColorContext);
function ColorComponent() {
    const color = useColor();
    // return <p>Current color is: ${color}</p>;
}


type Themee = "light" | "dark";
type ThemeContextValue = {
    theme: Themee;
    setTheme: (t: Themee) => void;
};
const ThemeContext = createContext<ThemeContextValue | null>(null);
function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) { throw new Error("useTheme must be used wihting a ThemeProvider"); }
    return context;
}


// EXERCISES:
type TTheme = "light" | "dark";
type TThemeContextValue = {
    theme: TTheme;
    toogleTheme: () => void;
};

const ThemeContxt = createContext<TThemeContextValue | null>(null);

function useTTheme() {
    const contxt = useContext(ThemeContxt);
    if (!contxt) { throw new Error("useTheme must be used wihting a ThemeProvider"); }
    return contxt;
}

type ThemeProviderProps = {
    children: React.ReactNode;
};

function ThemeProvider({ children }): ThemeProviderProps {
    const [theme, setTheme] = useState<TTheme>("light");

    const toogleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    const value: TThemeContextValue = {
        theme,
        toggleTheme,
    };
    // return (
    //     <ThemeContext.Provider value={value}>
    //     {children}
    //     </ThemeContext.Provider>
    // );
}

export function ThemeToogleButton() {
    const { theme, toggleTheme } = useTheme();

    // return 
    // <button onClick={toggleTheme}>
    // {theme === "light" ? "Activate Dark Mode" : "Activate Light Mode"}
    // </button>
}



// BEST PRACTICES WITH REACT + TS