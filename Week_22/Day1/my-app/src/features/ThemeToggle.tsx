import React, { useState, useReducer, useContext, createContext } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");
    
    return <button style={{
            backgroundColor: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white"
            }}
            onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}>
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
            </button>
}




interface State {
    count: number;
};

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

function reducer(state: State, action: Action): State {
    switch(action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0}
        default:
            throw new Error("Unknown case");
    }
}

export function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    
    return (
        <>
        <h3>Count: {state.count}</h3>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </>
    );
}




interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
};

// create Context
const ThemeContext = createContext<ThemeContextValue | null>(null);

// implement a ThemeProvide using useState
export function ThemeProvider({ children }:  {children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
    return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
    );
}

// custom hook using usecontext
function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("no provider used");
    return ctx;
}

export function ToggleThemeWithContext() {
    const { theme, toggleTheme } = useTheme();
    return (
    <button onClick={toggleTheme}>{theme === "light" ? "Switch to Dark" : "Switch to Light"}</button>
    );

}
